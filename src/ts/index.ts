import axios from "axios";

class Scraper {

  public static async get_data() {
    let Data: EnumData = {
      tax: {},
      recentlysold: [],
      items: []
    };

    let request = await this.request_roplace();

    // Get tax informations
    Data.tax = {
      amount: request.funds.b4tax.amount,
      rate: request.funds.b4tax.rate,
      max: request.funds.b4tax.max
    };

    // Get recently sold informations
    for (let item of request.recentlySold) {
      Data.recentlysold.push({
        name: item.name,
        price: item.price,
        image: this.roblox_image(item.itemId)
      });
    }

    // Get all items listed informations
    for (let item of request.items) {
      Data.items.push({
        name: item.name,
        price: item.price,
        rap: item.rap,
        image: this.roblox_image(item.itemId)
      });
    }

    return Data;
  }

  private static async request_roplace() {
    let resp = await axios.post("https://api.ro.place/graphql", {
      "operationName": "fetchExploreData",
      "variables": {},
      "query": "query fetchExploreData {\n  funds {\n    express {\n      amount\n      rate\n      max\n      __typename\n    }\n    expressStripe {\n      amount\n      rate\n      max\n      __typename\n    }\n    expressCrypto {\n      amount\n      rate\n      max\n      __typename\n    }\n    b4tax {\n      amount\n      rate\n      max\n      __typename\n    }\n    b4taxStripe {\n      amount\n      rate\n      max\n      __typename\n    }\n    b4taxCrypto {\n      amount\n      rate\n      max\n      __typename\n    }\n    __typename\n  }\n  recentlySold {\n    name\n    itemId\n    image\n    price\n    __typename\n  }\n  items {\n    itemId\n    name\n    image\n    rap\n    price\n    type\n    purchaseToken\n    paymentMethods {\n      name\n      data\n      __typename\n    }\n    seller {\n      id\n      username\n      __typename\n    }\n    __typename\n  }\n}"
    });

    return resp.data.data;
  }

  private static roblox_image(asset_id: number) {
    return `https://www.roblox.com/asset-thumbnail/image?assetId=${asset_id}&width=250&height=250&format=png`;
  }

}

module.exports = Scraper;

interface EnumData {
  tax: EnumDataTax;
  recentlysold: Array<EnumDataRecentlySold>;
  items: Array<EnumDataItemsListed>
}

interface EnumDataItemsListed {
  name: string;
  price: number;
  rap: number;
  image: string;
}

interface EnumDataRecentlySold {
  name: string;
  price: number;
  image: string;
}

interface EnumDataTax {
  amount?: number;
  rate?: number;
  max?: number;
}