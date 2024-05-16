# RO.Place API (Unofficial)

This package helps you retrieve informations from https://ro.place such as recently sold items / listed items / etc.

## Simple Installation

```bash
npm install roblox-roplace
```

## Simple Usage

```javascript
const ROPlace = require("roblox-roplace");
// get_data() method is a Promise function.
async function example_func() {
  let data = await ROPlace.get_data();
  console.log(data);
}
example_func();
// Output: Data Schema
```

## Schemas

### Data Schema

#### Example

```json
{
  "tax": {},
  "recentlysold": [],
  "items": []
}
```

### Tax Schema

#### Example

```json
{
  "amount": 2229,
  "rate": 6.8,
  "max": 1608
}
```

### Items Recently Sold Schema

#### Example

```json
{
  "id": 162066057,
  "name": "Adurite Antlers",
  "price": 63.99,
  "image": "https://tr.rbxcdn.com/594965f2f7729a9de2ad9881deef0f89/250/250/Hat/Png"
}
```

### Items Listed Schema

#### Example

```json
{
  "id": 84012460,
  "name": "Fluffy Unicorn",
  "price": 279.1,
  "rap": 86195,
  "image": "https://tr.rbxcdn.com/f15c8e1728d9f674e2f48be6d125f097/250/250/Gear/Png",
  "type": 19
}
```

## Issues

#### If you have any issue regarding the package, please create `a issue` here: https://github.com/AlaDyn172/roblox-roplace/issues
