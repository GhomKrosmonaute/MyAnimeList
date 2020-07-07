module.exports = function closePopup(event) {
  const close = document.getElementById("close");
  if (event.target === close) close.style.top = "-100vh";
};
