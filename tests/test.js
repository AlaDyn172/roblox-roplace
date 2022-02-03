const roplace = require("../src/js/index.js"); // in production mode use 'require("roblox-roplace")'.

async function Get_Data() {
  let data = await roplace.get_data();

  // It logs Data Schema, check README.md for more details about the Data Schema.
  console.log(data);
}

Get_Data();