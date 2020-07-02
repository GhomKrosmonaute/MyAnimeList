
const { promises: fs } = require("fs");
const META = require("../meta.json");

async function prepare(){
  const animes = await fs.readdir("./animes")
  
  for(const folder of animes){
    const meta = require("../animes/" + folder + "/meta.json")
    let edited = false
    
    for(const PROP in META)
      if(!meta.hasOwnProperty(PROP)) {
        meta[PROP] = META[PROP]
        edited = true
      }
      
    for(const prop in meta)
      if(!META.hasOwnProperty(prop)) {
        delete meta[prop]
        edited = true
      }
    
    if(edited)
      await fs.writeFile("./animes/" + folder + "/meta.json", JSON.stringify(meta, null, 2))
  }
}

module.exports = prepare