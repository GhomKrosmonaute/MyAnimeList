
const prepare = require("./builder/prepare");
const make = require("./builder/make");

(async function(){try{
  
    console.time("built in")
    await prepare()
    await make()
    console.timeEnd("built in")
  
}catch(error){console.error(error)}})();