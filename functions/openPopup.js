module.exports = function openPopup(card) {
  const queryString = card.getAttribute("meta");
  const close = document.getElementById("close");
  const popup = document.getElementById("popup");
  popup.innerHTML = newPopup(parseQuery(queryString));
  close.style.top = "0";
};
