const { promises: fs } = require("fs");
const META = require("../meta.json");

async function validate() {
  const animes = await fs.readdir("./animes");
  const metas = [];

  for (let i = 0; i < animes.length; i++) {
    const folder = animes[i];
    const meta = require("../animes/" + folder + "/meta.json");
    let edited = false;

    for (const PROP in META)
      if (!meta.hasOwnProperty(PROP)) {
        meta[PROP] = META[PROP];
        edited = true;
      }

    for (const prop in meta)
      if (!META.hasOwnProperty(prop)) {
        delete meta[prop];
        edited = true;
      }

    meta.id = i;
    meta.image = "./animes/" + folder + "/image";

    metas.push(meta);

    if (edited)
      await fs.writeFile(
        "./animes/" + folder + "/meta.json",
        JSON.stringify(meta, null, 2)
      );
  }

  return metas;
}

module.exports = validate;
