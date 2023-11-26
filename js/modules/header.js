function header (){
      //---меню бургер----------------------------

      const iconMenu = document.querySelector(".header__burger");
      const menuBody = document.querySelector(".header__menu");
  
      if (iconMenu) {
        iconMenu.addEventListener("click", function () {
          document.body.classList.toggle("lock");
          iconMenu.classList.toggle("active");
          menuBody.classList.toggle("active");
        });
      }
  
  
    //---прокрутка при клике--------------------
  
      const menuLinks = document.querySelectorAll(".header__link[data-goto]");
  
      if (menuLinks.length > 0) {
        menuLinks.forEach((menuLink) => {
          menuLink.addEventListener("click", onMenuLinkClick);
        });
  
        function onMenuLinkClick(event) {
          const menuLink = event.target;
          if (
            menuLink.dataset.goto &&
            document.querySelector(menuLink.dataset.goto)
          ) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =
              gotoBlock.getBoundingClientRect().top +
              scrollY -
              document.querySelector("header").offsetHeight;
  
            if (iconMenu.classList.contains("active")) {
              document.body.classList.remove("lock");
              iconMenu.classList.remove("active");
              menuBody.classList.remove("active");
            }
  
            window.scrollTo({
              top: gotoBlockValue,
              behavior: "smooth",
            });
            event.preventDefault();
          }
        }
      }
}

export default header;