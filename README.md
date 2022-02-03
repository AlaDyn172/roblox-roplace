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
  "amount": 6500,
  "rate": 6.5,
  "max": 1500
}
```

### Items Recently Sold Schema
#### Example
```json
{
  "name": "Neon Green Beautiful Hair",
  "price": 27.81,
  "image": "https://www.roblox.com/asset-thumbnail/image?assetId=151786902&width=250&height=250&format=png"
}
```

### Items Listed Schema
#### Example
```json
{
  "name": "Madness Face",
  "price": 157,
  "rap": 46976,
  "image": "https://www.roblox.com/asset-thumbnail/image?assetId=130213380&width=250&height=250&format=png"
}
```

## Issues
#### If you have any issue regarding the package, please create `a issue` here: https://github.com/AlaDyn172/roblox-roplace/issues