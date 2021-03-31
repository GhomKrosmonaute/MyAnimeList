const querystring = require("querystring")
const { promises: fs } = require("fs")

/**
 * @param {Anime[]} animes
 * @returns {Promise<void>}
 */
async function make(animes) {
  const cards = []
  const template = await fs.readFile("./template.html", { encoding: "utf8" })

  const functions = (await fs.readdir("./functions")).map((name) =>
    require("../functions/" + name)
  )

  for (const anime of animes) {
    const meta = querystring.stringify({ meta: JSON.stringify(anime) })
    cards.push(`
      <div
        id="anime-${anime.id}"
        meta="${meta}"
        class="${["card", ...anime.tags].join(" ")}"
        onclick="openPopup(this)">
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

  await fs.writeFile(
    "./index.html",
    template
      .replace("{{cards}}", cards.join(""))
      .replace("{{functions}}", functions.join("\n\n"))
  )
}

module.exports = make
