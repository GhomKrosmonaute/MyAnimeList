module.exports = function newPopup(anime) {
  return (
    `
      <h2> ${anime.name} </h2>
      <div class="frame">
        <img
          src="${anime.image}"
          alt="${anime.name.toLowerCase()} image">
      </div>
      <div class="wrapper flags">
        ${anime.flags.map((c) => "<div>" + c + "</div>").join("")}
      </div>
    ` +
    (anime.comment.length > 0
      ? `
        <div class="comments">
          ${anime.comment.map((c) => "<div>" + c + "</div>").join("")}
        </div>
      `
      : "") +
    `
    <div class='nav'>
      <div
        class="prev"
        onclick="openPopup(document.getElementById('anime-${anime.prev}'))">
        <div>Précédent</div>
      </div>
      <div
        class="next"
        onclick="openPopup(document.getElementById('anime-${anime.next}'))">
        <div>Suivant</div>
      </div>
    </div>`
  );
};
