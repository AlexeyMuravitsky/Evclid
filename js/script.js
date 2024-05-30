// TABS
document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

let search = document.querySelector(".search");
let searchBox = document.querySelector(".header__input");
let searchTest = document.querySelector(".test");

search.addEventListener(
  "click",

  function () {
    search.classList.toggle("search--active");

    searchBox.classList.toggle("header__input--active");

    searchTest.classList.toggle("test3");

    document.body.classList.toggle("stop-scroll");
  }
);
