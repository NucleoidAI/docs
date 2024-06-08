---
sidebar_position: 1
---

# Get Started

[![npm](https://img.shields.io/npm/v/nucleoidai)](https://www.npmjs.com/package/nucleoidai) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/nucleoidai/nucleoid/test.yml?branch=main)](https://github.com/NucleoidAI/Nucleoid/actions/workflows/test.yml)

Nucleoid serves as a reasoning engine for neuro-symbolic AI, implementing symbolic AI through declarative (logic-based) programming. Integrated within the Node.js runtime, it observes and manages statements in JavaScript, establishing intricate relationships among variables, objects, and functions in a graph structure. Installation is straightforward via npm, with no need for an external database, enhancing its accessibility and efficiency for neuro-symbolic applications.

```shell
> npx nucleoidai start
```

![Terminal Start](/media/terminal-start.png)

![Terminal Start](/media/terminal-postman.png)

![Terminal Start](/media/terminal-ide.png)

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

// Create an item with given name and barcode, but the barcode must be unique
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

Nucleoid runtime builds an execution plan based on the dependencies in your business logic and stores each transaction in the built-in data store.

<img src="https://cdn.nucleoid.com/media/graph.png" width="500"/>

In final step, start the app with a port number:

```javascript
app.listen(3000);
```

## Nucleoid IDE: OpenAPI Integration

Nucleoid IDE is a web interface that helps to run very same npm package with OpenAPI.

[Go to Nucleoid Chat](https://nucleoid.com/ide/chat)

<p align="center">
  <img src="https://cdn.nucleoid.com/media/screenshot-1.png" alt="Nucleoid IDE Screenshot 1" width="650"/>
  <img src="https://cdn.nucleoid.com/media/screenshot-2.png" alt="Nucleoid IDE Screenshot 2" width="650"/>
</p>
