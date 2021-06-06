module.exports = function search(keyword) {
  document.getElementById("close").style.top = "-100vh"
  document.getElementById("search").value = keyword

  keyword = keyword.toLowerCase()

  const cards = Array.from(document.getElementsByClassName("card"))

  if (keyword.length === 0) {
    cards.forEach((c) => (c.style.display = "block"))

    sortFromOrder(
      cards.sort((a, b) => {
        return (
          Number(a.id.replace("anime-", "")) -
          Number(b.id.replace("anime-", ""))
        )
      })
    )
  } else {
    const order = { name: [], other: [] }

    for (const card of cards) {
      const queryString = card.getAttribute("meta")
      /** @type {Anime} */
      const anime = parseQuery(queryString)

      let visible = false

      if (anime.name.toLowerCase().includes(keyword)) {
        order.name.push(card)

        visible = true
      } else if (
        anime.synopsis.toLowerCase().includes(keyword) ||
        anime.seasons === Number(keyword) ||
        anime.episodes === Number(keyword) ||
        anime.tags.some((tag) => tag.toLowerCase().includes(keyword)) ||
        anime.media.toLowerCase().includes(keyword)
      ) {
        order.other.push(card)

        visible = true
      }

      card.style.display = visible ? "block" : "none"
    }

    sortFromOrder(order.name.concat(order.other))
  }

  refreshCount()
}
