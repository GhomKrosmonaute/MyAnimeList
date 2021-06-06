const { promises: fs } = require("fs")

/** @type {Anime} */
const baseMeta = require("../meta.json")

/** @returns {Promise<Anime[]>} */
async function validate() {
  const folders = await fs.readdir("./animes")

  /** @type {Anime[]} */
  const animes = []

  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i]

    /** @type {Anime} */
    const anime = require("../animes/" + folder + "/meta.json")
    let edited = false

    for (const prop in baseMeta)
      if (!anime.hasOwnProperty(prop)) {
        anime[prop] = baseMeta[prop]
        edited = true
      }

    for (const prop in anime)
      if (!baseMeta.hasOwnProperty(prop)) {
        delete anime[prop]
        edited = true
      }

    anime.id = i
    anime.image = "./animes/" + folder + "/image"

    animes.push(anime)

    if (edited)
      await fs.writeFile(
        "./animes/" + folder + "/meta.json",
        JSON.stringify(anime, null, 2)
      )
  }

  return animes
}

module.exports = validate
