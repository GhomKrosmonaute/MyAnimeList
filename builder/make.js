
const querystring = require("querystring");
const { promises: fs } = require("fs");
const extRegex = /\.(jpe?g|png|gif)/;

async function make(){
  const cards = [];
  const template = await fs.readFile("./template.html", {encoding: "utf8"})
  
  const animes = (await fs.readdir("./animes"))
    .filter(folder => !extRegex.test(folder))
    .map(folder => ({
      image: "./animes/" + folder + "/image",
      ...require("../animes/" + folder + "/meta.json")
    }));
  
  for(const anime of animes){
    cards.push(`
      <div
        class="card ${anime.flags.join(' ')}"
        onclick="openPopup('${querystring.stringify({meta: JSON.stringify(anime)})}')">
        <h2 title="${anime.name}"> ${anime.name} </h2>
        <div class="frame">
          <img
            title="show more"
            src="${anime.image}"
            alt="${anime.name.toLowerCase()} image">
        </div>
      </div>
    `)
  }
  
  await fs.writeFile("./index.html", template.replace("{{cards}}",cards.join("")))
}

module.exports = make