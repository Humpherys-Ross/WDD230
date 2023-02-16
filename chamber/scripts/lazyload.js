const allImages = document.querySelectorAll("img[data-src]");

const lazyLoad = (img) => {
  const placeholder = img.parentElement;
  img.setAttribute("src", img.getAttribute("data-src"));
  if (!img.complete) {
    img.onload = () => {
      img.removeAttribute("data-src");
      img.classList.add("in");
      placeholder.classList.add("loaded");
      img.style.transition = "transform 1s";
    };
  } else {
    img.removeAttribute("data-src");
    img.classList.add("in");
    placeholder.classList.add("loaded");
    img.style.transition = "transform 1s";
  }
};

const options = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        lazyLoad(item.target);
        observer.unobserve(item.target);
      }
    });
  }, options);
  allImages.forEach((img) => {
    observer.observe(img);
  });
} else {
  allImages.forEach((img) => {
    lazyLoad(img);
  });
}
