
const { promises: fs } = require("fs");
const extRegex = /\.(jpe?g|png|gif)/;
const cards = [];

(async function(){
  
  console.time("build")
  
  const template = await fs.readFile("./template.html", {encoding: "utf8"})
  
  /** @type {{name: string, url: string}[]} */
  const animes = (await fs.readdir("./illustrations"))
    .filter(fileName => extRegex.test(fileName))
    .map(fileName => ({
      url: "./illustrations/" + fileName,
      name: fileName.replace(extRegex,"").trim()
    }));
  
  for(const anime of animes){
    cards.push(`
      <div class="card">
        <h3> ${anime.name} </h3>
        <div class="frame">
          <img
            src="${anime.url}"
            alt="${anime.name.toLowerCase()} image">
        </div>
      </div>
    `)
  }
  
  await fs.writeFile("./index.html", template.replace("{{cards}}",cards.join("")))
  
  console.timeEnd("build")
  
})();