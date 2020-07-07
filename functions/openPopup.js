module.exports = function openPopup(card) {
  const queryString = card.getAttribute("meta");
  const { meta } = parseQuery(queryString);
  const close = document.getElementById("close");
  const popup = document.getElementById("popup");
  popup.innerHTML = newPopup(JSON.parse(meta));
  close.style.top = "0";
};
