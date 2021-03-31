const { promises: fs } = require("fs")

/** @type {Anime} */
const ANIME = require("../meta.json")

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

    for (const PROP in ANIME)
      if (!anime.hasOwnProperty(PROP)) {
        anime[PROP] = ANIME[PROP]
        edited = true
      }

    for (const prop in anime)
      if (!ANIME.hasOwnProperty(prop)) {
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
