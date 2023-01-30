---
sidebar_position: 1
---

# Get Started

[![npm](https://img.shields.io/npm/v/nucleoidjs)](https://www.npmjs.com/package/nucleoidjs) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/nucleoidjs/nucleoid/test.yml?branch=main)](https://github.com/NucleoidJS/Nucleoid/actions/workflows/test.yml)

Nucleoid is an implementation of symbolic AI for declarative (logic-based) programming at the runtime and tracks given statements in JavaScript and creates relationships between variables, objects, and functions etc. in the graph. The runtime is embedded inside Node.js and installed through `npm` without requiring to install external database.

```shell
> npm install nucleoidjs
```

Once included in the project, you can initialize as:

```javascript
const nucleoid = require("nucleoidjs");
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

// Create an item with given name and barcode, but the barcode must be unique
app.post("/items", (req) => {
  const barcode = req.body.barcode;

  const check = Item.find((i) => i.barcode === barcode);

  if (check) {
    throw "DUPLICATE_BARCODE";
  }

  return new Item(name, barcode);
});
```

That is all you need :heart:

Nucleoid runtime builds an execution plan based on the dependencies in your business logic and stores each transaction in the built-in data store.

<img src="https://cdn.nucleoid.com/media/graph.png" width="500"/>

In final step, start the app with a port number:

```javascript
app.listen(3000);
```

## Nucleoid IDE: OpenAPI Integration

Nucleoid IDE is a web interface that helps to run very same npm package with OpenAPI.

[Go to Nucleoid IDE](https://nucleoid.com/ide/)

<p align="center">
  <img src="https://cdn.nucleoid.com/media/screenshot-1.png" alt="Nucleoid IDE Screenshot 1" width="650"/>
  <img src="https://cdn.nucleoid.com/media/screenshot-2.png" alt="Nucleoid IDE Screenshot 2" width="650"/>
</p>
