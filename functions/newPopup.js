module.exports = function newPopup(anime) {
  return (
    `
      <h2> ${anime.name} </h2>
      <div class="frame">
        <div
          class="prev"
          onclick="openPopup(document.getElementById('anime-${anime.prev}'))">
          <div class="icon-button">&blacktriangleleft;</div>
        </div>
        <img
          src="${anime.image}"
          alt="${anime.name.toLowerCase()} image">
         <div
          class="next"
          onclick="openPopup(document.getElementById('anime-${anime.next}'))">
          <div class="icon-button">&blacktriangleright;</div>
        </div>
      </div>
      <div class="wrapper flags">
        ${anime.flags.map((c) => "<div onclick='search(`" + c + "`)'>" + c + "</div>").join("")}
      </div>
    ` +
    (anime.comments.length > 0
      ? `
        <div class="comments">
          ${anime.comments.map((c) => "<div>" + c + "</div>").join("")}
        </div>
      `
      : "")
  );
};
