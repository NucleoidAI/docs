---
sidebar_position: 1
title: Control Flow
description: Nucleoid Control Flow
---

```javascript
nucleoid.run(() => {
  var a = 1;
  var b = a + 2;
  var c = b + 3;
});
```

Once a variable is defined like ` var a = 1`, the runtime does 3 major things. First, it places the `var a` in the graph and makes the connection between dependent variables (In this case).

![Variable Graph](../../static/media/variable-graph.drawio.png)

Second, updates state with new values in order get affect

|         | State |
| ------- | ----- |
| `var a` | 1     |
| `var b` | 3     |
| `var c` | 6     |

However, actual execution is different since variables are tracked in the graph.

```javascript
state.a = 1;
state.b = state.a + 2;
state.c = state.b + 3;
```

and finally stores statements in the runtime-managed `fs`

The main objective of the project is completely eliminating technical codes so that developers can focus on business logic and bringing database features into the programming runtime.

> If you consider, let's say `Order` object is the part of business logic, any codes lines not related with that, for example, managing connection, converting object to JSON etc. are considered technical codes.
