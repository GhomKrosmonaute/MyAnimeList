module.exports = function changePopup(next) {
  const cards = Array.from(document.getElementsByClassName("card")).filter(
    (c) => c.style.display !== "none"
  );
  let index = cards.indexOf(POPUP_CARD) + next;
  if (index >= cards.length) index = 0;
  if (index < 0) index = cards.length - 1;
  openPopup(cards[index]);
};
