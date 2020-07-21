module.exports = function search(keyword) {
  document.getElementById("close").style.top = "-100vh";
  document.getElementById("search").value = keyword;
  keyword = keyword.toLowerCase();
  const cards = Array.from(document.getElementsByClassName("card"));
  if (keyword.length === 0) {
    cards.forEach((c) => (c.style.display = "block"));
    sortFromOrder(
      cards.sort((a, b) => {
        return (
          Number(a.id.replace("anime-", "")) -
          Number(b.id.replace("anime-", ""))
        );
      })
    );
  } else {
    const order = { name: [], flag: [], other: [] };
    for (const card of cards) {
      const queryString = card.getAttribute("meta");
      const anime = parseQuery(queryString);
      let visible = false;
      if (anime.name.toLowerCase().includes(keyword)) {
        order.name.push(card);
        visible = true;
      } else if (anime.flags.includes(keyword)) {
        order.flag.push(card);
        visible = true;
      } else if (
        anime.synopsis.includes(keyword) ||
        anime.saisons == keyword ||
        anime.épisodes == keyword
      ) {
        order.other.push(card);
        visible = true;
      } else {
        card.style.display = "none";
      }
      if (visible) card.style.display = "block";
    }
    sortFromOrder(order.name.concat(order.flag).concat(order.other));
  }
};
