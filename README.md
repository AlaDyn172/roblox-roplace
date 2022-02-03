# RO.Place API (Unofficial)
This package helps you retrieve informations from https://ro.place such as recently sold items / listed items / etc.

## Simple Installation
```javascript
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
```typescript
interface EnumData {
  tax: EnumDataTax;
  recentlysold: Array<EnumDataRecentlySold>;
  items: Array<EnumDataItemsListed>
}
```

### Tax Schema
```typescript
interface EnumDataTax {
  amount: number;
  rate: number;
  max: number;
}
```

### Items Recently Sold Schema
```typescript
interface EnumDataRecentlySold {
  name: string;
  price: number;
  image: string;
}
```

### Items Listed Schema
```typescript
interface EnumDataItemsListed {
  name: string;
  price: number;
  rap: number;
  image: string;
}
```

## Issues
#### If you have any issue regarding the package, please create `a issue` here: https://github.com/AlaDyn172/roblox-roplace/issues