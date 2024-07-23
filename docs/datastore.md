---
sidebar_position: 4
title: Built-in Data Store
description: Nucleoid built-in data store
---

<head>
  <link rel="canonical" href="https://github.com/NucleoidAI/datastore" />
</head>

# Built-in Data Store

## Introduction

One important objective of Nucleoid project is to combine logic and data under the same runtime. Nucleoid builds a knowledge graph and execution plan by rendering given statements and stores them in the built-in on-chain data store and streams out hashes (blocks) as completion of transactions. This model provides fast computation since limiting IO process for transaction, but still ability to build up the same data in external databases or cloud services.

### What is the On-Chain Data Store?

Nucleoid has a built-in on-chain data store persists sequent transactions with the blockchain style encryption. Each transaction is sequentially encrypted with each other and the data store saves those hashes in managed-files. Each transaction is completed in sub-millisecond and any changes in hashes throws an error so that the final state of objects is guaranteed, and objects cannot be visible without ordered hashes and the initial key.

#### How is a hash generated?

The runtime uses the hard-coded genesis token as a first hash in the chain. As it receives more transactions, the data store uses the previous hash as well as the key to generate next hash in the chain. It uses Node.js built-in crypto package with a configurable algorithm.

Example of on-chain data in managed-files `~/.nuc/data/`:

```
ff2024a65a339abd3c77bb069da38717:10812ca4ed497e3167684f9b0316b5cf72992adffd9ed8bd97e08f321e117daf367b012
a1a521479a43e1b16ce0ecc1671fbd8d:1ceb5211efadecc791c22a010752ecdf626764a71c4bc80c74f9d3ba6adb88d2e7cedcf
20033f1556383ce5b911436aa76381a8:543a50ae5072aa64acb0ef7c307aa53f3aaea042023704362305bedfafd721c9f918740
ee8a894958d4bb372d1a9e63335ccee7:4834d1e04e6b234135ae896c0057186df4c820b9b25fa6ce153e03f89c63b905208ba07
dc2d6d47071db41845fa8631b131bef5:0ec5427dd957ccb46fbd6884290eb0de9696102405fc606d2acf56e059ed3e827610e6a
3ef42a5927c4e231f17323619d6a60d1:e793031d12c9e5b10708c62d49a56c77fd9ef463606609036d22af83490106c213224e5
3a016c3e71238462f8b42ebb733e5856:cb1595d06424c7e1ec3c353f5eee2d6cf1b804306dcdadb09a6be9a066b89581270464d
```

## Transactions

Each call to the runtime is considered a transaction even though it contains multiple statements, and it rolls back the transaction if there is an error thrown.

```javascript
nucleoid.run(() => {
  a = 1;
  b = a + 2;
  c = b + 3;
});
```

The runtime returns something like this; result (if any), timestamp and a transaction hash.

```json
{
  "date": 1672179318252,
  "time": 1,
  "hash": "d3af6bdae8e8ff1eeb1f0f1ea8aaf02e:8b23f8ec493a16cee484f44a6e09a543a62b5e535b8c16ad5f8484766eed686d"
}
```

> Important different is the on-chain data store doesn't store value, instead it persists transactions like in CQRS, Event Store etc. and it is expected that the runtime builds up values in memory along with. This algorithm provides fast-read and fast-write with larger space complexity as well as requiring computing values in memory at boot up as a trade off.

For example, this table is built in the memory as a part of transaction:

**Values in Memory**

|         | State |
| ------- | ----- |
| `var a` | 1     |
| `var b` | 3     |
| `var c` | 6     |

**Transaction in Data Store**

but actual the data store looks like this :point_down: (This is decoded transaction objects though):

```
{ "s": "var a = 1" ... }
{ "s": "var b = a + 2" ... }
{ "s": "var c = b + 3" ... }
```

## Scalability and CAP Support

Nucleoid follows single-threaded multi-process paradigm. Each Nucleoid instance runs in its own process and more than one instances can be run in the same machine.

Nucleoid is not designed for specific scalability model, in fact high plasticity of the runtime supports majority scalability strategies as well as CAP theorem, but we will be focusing on sharding strategy like in MongoDB and additional features with the smart sharding.

<img src="https://cdn.nucleoid.com/media/scalability.drawio.png" alt="Scalability" width="400" />

### Smart Sharding

The smart sharding takes a JavaScript function and lets developers create own scalability policies unlike limited configuration options in major databases. The function receives additional data such as request headers, body etc. and it also comes with Nucleoid runtime along with the built-in data store, so that the sharding function can persist user data in order to support `memtable` like in Cassandra.

```shell
npx nucleoidai start --cluster
```

This `npx` command starts specialized Nucleoid instance and acts like a front door to the cluster. The default sharding function takes `Process` header from REST and looks up in process list for IP and port information, and cluster instances can be added with calling terminal with `process1 = new Process("127.0.0.1", 8448)`.

The default function can be altered with including a function in `~/.nuc/handlers/cluster.js` and returning process id from the function. For example:

```javascript
// cluster.js
const jwt = require("jsonwebtoken");

function run(req, fn) {
  const bearer = req.headers["authorization"];
  const token = bearer.split();

  const decoded = jwt.verify(token, "secret");
  return decoded.company_id; // This returns company id as a process id
}

module.export = run;
```

## Benchmark

This is the comparation our sample order app in Nucleoid IDE against MySQL and Postgres with using Express.js and Sequelize libraries.

https://nucleoid.com/ide/sample

<img src="https://cdn.nucleoid.com/media/benchmark.png" alt="Benchmark" width="550" />

> Performance benchmark is run in t2.micro of AWS EC2 instance and both databases had dedicated servers with no indexes and default configurations.

https://github.com/NucleoidAI/benchmark

This does not necessary mean Nucleoid runtime is faster than MySQL or Postgres, instead many DBs in production require constant maintenance by DBA team with adjusting indexing, caching, purging etc. but Nucleoid tries to solve this problem with managing logic and data internally.

For applications with average complexity, Nucleoid's performance is close to linear because of on-chain data store, in-memory computing model as well as limiting the IO process. Again, thanks to declarative programming, Nucleoid low-code framework manages technical details while developers focus on business logic.

## Streaming

The same as the cluster handler, a streaming handler can be added in `~/.nuc/handlers/stream.js`. This handler is called at the end of transaction with a transaction hash. This is for streaming hash in sequence to external databases or cloud platforms and happens "almost" real-time.

```javascript
// stream.js
const AWS = require("aws-sdk");
const kinesis = new AWS.Kinesis();

function stream(hash) {
  kinesis.putRecord(hash, function (err, data) {
    if (err) {
      console.error(err);
    }
  });
}

module.export = stream;
```

### Cloud Integration

In Nucleoid, the runtime system views each transaction as data and uses it to create the application, which includes both logic and data. This means that if the Nucleoid instance needs to be reconstructed, such as during migration, failovers, or disaster recovery, the system uses streaming handlers to rebuild the application by replaying the transactions. This ensures that the logic and data are in sync, even after a reboot of the system. The use of transactions as the fundamental building block of the application allows Nucleoid to simplify the overall architecture and increase the speed and efficiency of the system.

In this particular example:

1. AWS KMS provides secret for encoding or decoding chained hashes.
2. AWS Kineses will carry hashes into cloud services.
3. These hashes eventually will be stored in S3.

![Cloud Integration](https://cdn.nucleoid.com/media/cloud-integration.drawio.png)
