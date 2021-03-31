module.exports = function sortFromOrder(order) {
  const cards = document.getElementById("cards")
  for (const card of order) cards.appendChild(card)
}
