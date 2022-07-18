---
sidebar_position: 4
---

# Advanced Example

Let's take a look at advanced example

```javascript
class Order {
  constructor(qty, item) {
    this.item = item;
    this.qty = qty;
    this.date = Date.now();
  }
}
nucleoid.register(Order);

class Item {
  constructor(name, barcode) {
    this.name = name;
    this.barcode = barcode;
  }
}
nucleoid.register(Item);

nucleoid.run(() => {
  const item0 = new item("ITEM-1", "BARCODE-1");
  const order0 = new Order(item, 2);
});
```
