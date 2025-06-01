import { bniconMap } from './mapping.js';

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("iconGrid");
  const search = document.getElementById("search");

  function renderIcons(filter = "") {
    grid.innerHTML = "";
    Object.entries(bniconMap).forEach(([name, code]) => {
      if (name.includes(filter.toLowerCase())) {
        const div = document.createElement("div");
        div.className = "icon-item";
        div.setAttribute("data-name", name);
        div.innerHTML = `&#x${code.slice(2)};`;
        div.onclick = () => {
          window.open(`preview.html?name=${name}&code=${code}`, "_blank");
        };
        grid.appendChild(div);
      }
    });
  }

  search.addEventListener("input", () => {
    renderIcons(search.value);
  });

  renderIcons();
});
