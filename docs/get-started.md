---
sidebar_position: 1
description: Get started with Nucleoid, a declarative, logic-based runtime designed for Neuro-Symbolic AI, focusing on adaptive reasoning and explainability through the Logic Graph.
---

# Get Started

[![npm](https://img.shields.io/npm/v/nucleoidai)](https://www.npmjs.com/package/nucleoidai) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/nucleoidai/nucleoid/test.yml?branch=main)](https://github.com/NucleoidAI/Nucleoid/actions/workflows/test.yml)

Nucleoid is a reasoning engine for Neuro-Symbolic AI, implementing symbolic AI through declarative (logic-based) programming. Integrated within the Node.js runtime, it observes and manages statements in JavaScript, establishing intricate relationships among variables, objects, and functions in a graph structure. Installation is straightforward via npm, with no need for an external database, enhancing its accessibility and efficiency for neuro-symbolic applications.

## Hello World

import ReactPlayer from "react-player";

<p align="center">
  <ReactPlayer
    width={"100%"}
    height={"100%"}
    controls
    url={
      "https://cdn.nucleoid.com/media/05d9251a-9511-4e6e-a57e-8dc7ff99f71c.mp4"
    }
  />
</p>

## Installation

```shell
> npx nucleoidai start
```

![Terminal Start](/media/terminal-start.png)

### Terminal

Terminal runs on port `8448` by default. Send `POST` to `http://localhost:8448` with `Content-Type: application/javascript`:

![Terminal Start](/media/terminal-postman.png)

### IDE

Queries also can be made through open-source [IDE](https://github.com/NucleoidAI/IDE) as the runtime running locally:

![Terminal Start](/media/terminal-ide.png)

## Library

Once included in the project, you can initialize as:

```javascript
const nucleoid = require("nucleoidai");
const app = nucleoid();
```

Now, you can tie your business logic to API

```javascript
class Item {
  constructor(name, barcode) {
    this.name = name;
    this.barcode = barcode;
  }
}
nucleoid.register(Item);

// > Create an item with given name and barcode, but the barcode must be unique
app.post("/items", (req) => {
  const name = req.body.name;
  const barcode = req.body.barcode;

  const check = Item.find((i) => i.barcode === barcode);

  if (check) {
    throw "DUPLICATE_BARCODE";
  }

  return new Item(name, barcode);
});
```

That is all you need :heart:

> Nucleoid runtime builds an execution plan based on the dependencies in your business logic and stores each transaction in the built-in data store.

<p align="center">
  <img src="https://cdn.nucleoid.com/media/graph.png" width="500"/>
</p>

In final step, start the app with a port number:

```javascript
app.listen(3000);
```
