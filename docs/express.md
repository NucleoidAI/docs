---
sidebar_position: 5
title: Express.js
---

# Express.js Integration

## HTTP Params, Query, Body

HTTP details pass in req parameter as `req.body`, `req.query` and `req.params`:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
nucleoid.register(User);

app.post("/users", (req) => new User(req.body.name));

app.get("/users", (req) => User.filter((u) => u.name == req.query.name));

app.get("/users/:user", (req) => User[req.params.user]);
```

In the meanwhile, you can still access underlying Express APIs for non-Nucleoidic functions

```javascript
const app = nucleoid();

const express = app.express();

express.use("/static", express.static("public"));

express.get("/test", (req, res) => res.send("Hello!"));
```
