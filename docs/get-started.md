---
sidebar_position: 1
---

# Get Started

[![npm](https://img.shields.io/npm/v/nucleoidjs)](https://www.npmjs.com/package/nucleoidjs) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/nucleoidjs/nucleoid/test.yml?branch=main)](https://github.com/NucleoidJS/Nucleoid/actions/workflows/test.yml)

Nucleoid runtime is embedded inside Node.js and installed through `npm` without requiring to install external database.

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
// Creating an user
app.post("/users", () => new User("Daphne"));

// Getting the user
app.get("/users", () => User.find((user) => user.name === "Daphne"));
```

In final step, start the app with a port number:

```javascript
app.listen(3000);
```
