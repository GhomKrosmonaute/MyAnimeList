
const { promises: fs } = require("fs");
const extRegex = /\.(jpe?g|png|gif)/;
const META = require("../meta.json");

async function prepare(){
  const animes = (await fs.readdir("./animes"))
    .filter(filename => extRegex.test(filename))
  
  for(const filename of animes){
    const folder = filename.replace(extRegex,'')
    await fs.mkdir("./animes/" + folder)
    await fs.rename("./animes/" + filename, "./animes/" + folder + "/image")
    const meta = Object.create(META)
    meta.name = folder
    await fs.writeFile("./animes/" + folder + "/meta.json", JSON.stringify(meta, null, 2))
  }
}

module.exports = prepare