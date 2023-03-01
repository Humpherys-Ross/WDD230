const dataURL = "https://melodycurran.github.io/wdd230/chamber/js/data.json";
const listDiv = document.querySelector(".list-view");
const cardDiv = document.querySelector(".grid-view");
const viewsButtons = document.querySelectorAll(".links ul li");
const views = document.querySelectorAll(".view-div");

const displayBusinesses = (business, format) => {
  const media_card = document.createElement("section");
  const h2 = document.createElement("h2");
  const image = document.createElement("img");
  const hr = document.createElement("hr");
  const phone = document.createElement("p");
  const address = document.createElement("p");
  const website = document.createElement("a");

  h2.textContent = business.name;
  phone.textContent = business.phone;
  address.textContent = business.address;
  website.textContent = business.website;

  website.setAttribute("href", business.website);
  image.setAttribute("src", business.images);
  image.setAttribute("alt", `Image of ${business.name}`);
  image.setAttribute("loading", "lazy");

  media_card.appendChild(h2);
  media_card.appendChild(image);
  media_card.appendChild(hr);
  media_card.appendChild(phone);
  media_card.appendChild(address);
  media_card.appendChild(website);

  if (format === "list") {
    media_card.classList.add("list-view");
    website.classList.add("hide");
    cardDiv.classList.add("hide");
    listDiv.appendChild(media_card);
  } else if (format === "grid") {
    media_card.classList.add("grid-view");
    listDiv.classList.add("hide");
    cardDiv.appendChild(media_card);
  }
};

fetch(dataURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.table(jsonObject);

    const businesses = jsonObject.businesses;
    businesses.forEach((business) => {
      displayBusinesses(business, "grid");
      displayBusinesses(business, "list");
    });
  });

viewsButtons.forEach((link) => {
  link.addEventListener("click", () => {
    viewsButtons.forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");

    const li_view = link.getAttribute("data-view");

    views.forEach((view) => {
      view.style.display = "none";
    });

    if (li_view === "grid-view") {
      document.querySelector(`.${li_view}`).style.display = "grid";
    } else {
      document.querySelector(`.${li_view}`).style.display = "block";
    }
  });
});
