---
sidebar_position: 5
title: OpenAPI
description: Nucleoid OpenAPI integration
---

# OpenAPI Integration

Similar to building on Express.js, you can also build the same APIs with OpenAPI. There is only one additional field `x-nuc-action` that is triggered when the API has been called, which run the action function inside the Nucleoid runtime.

`POST https://localhost:8448/openapi`

```json
{
  "api": {
    "/": {
      "get": {
        "summary": "Hello World",
        "description": "Hello World",
        "params": [
          {
            "name": "example",
            "in": "query",
            "type": "string",
            "required": false,
            "description": "example"
          }
        ],
        "request": {
          "type": "object",
          "properties": {}
        },
        "response": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          }
        },
        "x-nuc-action": "function action(req) { return { message: 'Hello World' }; }"
      }
    }
  }
}
```
