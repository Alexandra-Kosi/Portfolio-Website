document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".drawer");

  hamburger.addEventListener("click", function () {
    drawer.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll("[data-scroll-to]");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-scroll-to");
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
