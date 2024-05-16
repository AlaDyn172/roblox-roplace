const roplace = require("../src/js/index.js").default; // in production mode use 'import roplace from "roblox-roplace"'.

async function main() {
  let data = await roplace.get();

  // It logs Data Schema, check README.md for more details about the Data Schema.
  console.log(data);
}

main();
