"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Scraper {
    static get_data() {
        return __awaiter(this, void 0, void 0, function* () {
            let Data = {
                tax: {},
                recentlysold: [],
                items: []
            };
            let request = yield this.request_roplace();
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
        });
    }
    static request_roplace() {
        return __awaiter(this, void 0, void 0, function* () {
            let resp = yield axios_1.default.post("https://api.ro.place/graphql", {
                "operationName": "fetchExploreData",
                "variables": {},
                "query": "query fetchExploreData {\n  funds {\n    express {\n      amount\n      rate\n      max\n      __typename\n    }\n    expressStripe {\n      amount\n      rate\n      max\n      __typename\n    }\n    expressCrypto {\n      amount\n      rate\n      max\n      __typename\n    }\n    b4tax {\n      amount\n      rate\n      max\n      __typename\n    }\n    b4taxStripe {\n      amount\n      rate\n      max\n      __typename\n    }\n    b4taxCrypto {\n      amount\n      rate\n      max\n      __typename\n    }\n    __typename\n  }\n  recentlySold {\n    name\n    itemId\n    image\n    price\n    __typename\n  }\n  items {\n    itemId\n    name\n    image\n    rap\n    price\n    type\n    purchaseToken\n    paymentMethods {\n      name\n      data\n      __typename\n    }\n    seller {\n      id\n      username\n      __typename\n    }\n    __typename\n  }\n}"
            });
            return resp.data.data;
        });
    }
    static roblox_image(asset_id) {
        return `https://www.roblox.com/asset-thumbnail/image?assetId=${asset_id}&width=250&height=250&format=png`;
    }
}
module.exports = Scraper;
