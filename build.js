
const prepare = require("./builder/prepare");
const make = require("./builder/make");

(async function(){try{
  
    console.time("build in")
    await prepare()
    await make()
    console.timeEnd("build in")
  
}catch(error){console.error(error)}})();