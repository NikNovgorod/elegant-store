function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector("#mobile-nav-btn");
  const navBtnClose = document.querySelector("#close-mobile-nav");
  const nav = document.querySelector(".mobile-nav");
  const navBackgr = document.querySelector(".mobile-nav-fade");

  navBtnOpen.onclick = function () {
    console.log("click Open");
    nav.classList.toggle("mobile-nav--open");
    navBackgr.classList.toggle("mobile-nav-fade--open");

    document.body.classList.toggle("no-scroll");
  };

  navBtnClose.onclick = function () {
    console.log("click Close");
    nav.classList.toggle("mobile-nav--open");
    navBackgr.classList.toggle("mobile-nav-fade--open");

    document.body.classList.toggle("no-scroll");
  };
}

export default mobileNav;
