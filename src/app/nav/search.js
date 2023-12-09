import data from "../nav/tags.js";

const search = document.querySelector(".search");
const results = document.querySelector(".results");

const renderListItem = (item) => {
  const li = document.createElement("li");
  const titleLink = document.createElement("a");
  titleLink.href = `https://loopcourse.com/${item.url}`;
  titleLink.textContent = `${item.level} | ${item.title}`;
  titleLink.target = "_blank";
  titleLink.style.textDecoration = "none";
  li.appendChild(titleLink);
  return li;
};

const showList = () => {
  const searchTerm = search.value.trim().toLowerCase();

  if (searchTerm === "") {
    results.style.display = "none";
    return;
  }

  results.innerHTML = "";

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.tag.toLowerCase().includes(searchTerm)
  );

  const listItems = filteredData.map(renderListItem);

  if (listItems.length === 0) {
    results.style.display = "none";
  } else {
    results.style.display = "block";
    listItems.forEach((li) => results.appendChild(li));
  }
};

search.addEventListener("input", showList);
