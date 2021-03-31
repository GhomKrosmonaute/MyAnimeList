module.exports = function refreshCount() {
  document.getElementById("result-count").innerText = String(
    Array.from(document.getElementById("cards").children).filter((card) => {
      return card.style.display !== "none"
    }).length
  )
}
