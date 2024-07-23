---
sidebar_position: 3
description: Nucleoid API reference
---

# API

## `const app = nucleoid ( )`

Creates application

```javascript
const nucleoid = require("nucleoidai");
const app = nucleoid();
```

<br/>
<hr/>
<br/>

### `app . get, post ( path , fn )`

Creates routes

| Argument | Description                                                                                                                                                                                              | Required |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| path     | The path that the application routes to.                                                                                                                                                                 | Yes      |
| fn       | The function that Nucleoid renders inside.<br/><br/> **fn ( req )** <br/> req - contains http information: <br/><br/> req.body - JSON body <br/> req.query - query params <br/> req.params - path params | Yes      |

```javascript
app.get("/orders", () => Orders.filter((order) => order.shipped));

app.post("/orders", () => new Order("SKU-123"));

app.get("/users/:id", (req) => User[req.params.id]);
```

<br/>
<hr/>
<br/>

### `app.listen ( port , callback )`

| Argument | Description                                   | Required |
| -------- | --------------------------------------------- | -------- |
| port     | The path that the application routes to.      | Yes      |
| callback | The function that Nucleoid renders.<br/><br/> | Yes      |

```javascript
app.listen(3000);
```

<br/>
<hr/>
<br/>

## `nucleoid.run ( fn , scope )`

Runs function with scope

| Argument | Description                                                      | Required |
| -------- | ---------------------------------------------------------------- | -------- |
| fn       | The function that Nucleoid renders inside along with scope.      | Yes      |
| scope    | The object of variables and values passed into Nucleoid runtime. | No       |

```javascript
const order = nucleoid.run(() => new Order());

const scope = { userId: 1 };
const user = nucleoid.run((scope) => new User(scope.userId), scope);
```

<br/>
<hr/>
<br/>

### `const express = app.express ( )`

It gives an direct access to underlying Express.js libraries

```javascript
const express = app.express();
express.get("/test", (req, res) => res.send("Hello"));
```

<br/>
