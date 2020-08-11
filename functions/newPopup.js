/**
 * @param {Anime} anime
 * @returns {string}
 */
module.exports = function newPopup(anime) {
  return (
    `
      <h2> ${anime.name} </h2>
      <div class="frame">
        <div
          class="prev"
          onclick="changePopup(-1)">
          <div class="icon-button">&blacktriangleleft;</div>
        </div>
        <img
          src="${anime.image}"
          alt="${anime.name.toLowerCase()} image">
        <div
          class="next"
          onclick="changePopup(1)">
          <div class="icon-button">&blacktriangleright;</div>
        </div>
      </div>
      <div class="wrapper tags">
        ${anime.tags
          .map((c) => "<div onclick='search(`" + c + "`)'>" + c + "</div>")
          .join("")}
      </div>
      <!--<p
        class="synopsis"
        ${anime.synopsis}
      </p>-->
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
