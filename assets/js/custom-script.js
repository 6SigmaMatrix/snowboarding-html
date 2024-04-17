const menu = $(".menu");
const menuMain = $(".menu-main", menu);
const goBack = $(".go-back", menu);
const menuTrigger = $(".mobile-menu-trigger");
const closeMenu = $(".mobile-menu-close", menu);
let subMenu;

menuMain.click(function (e) {
  if (!menu.hasClass("active")) {
    return;
  }
  const hasChildren = $(e.target).closest(".menu-item-has-children");
  if (hasChildren.length) {
    showSubMenu(hasChildren);
  }
});

goBack.click(function () {
  hideSubMenu();
});

menuTrigger.click(function () {
  toggleMenu();
});

closeMenu.click(function () {
  toggleMenu();
});

$(".menu-overlay").click(function () {
  toggleMenu();
});

function toggleMenu() {
  menu.toggleClass("active");
  $(".menu-overlay").toggleClass("active");
}

function showSubMenu(hasChildren) {
  subMenu = $(".sub-menu", hasChildren);
  subMenu.addClass("active");
  subMenu.css("animation", "slideLeft 0.5s ease forwards");
  const menuTitle = $("i", hasChildren)
    .parent()
    .contents()
    .first()
    .text();
  $(".current-menu-title", menu).html(menuTitle);
  $(".mobile-menu-head", menu).addClass("active");
}

function hideSubMenu() {
  subMenu.css("animation", "slideRight 0.5s ease forwards");
  setTimeout(function () {
    subMenu.removeClass("active");
  }, 300);
  $(".current-menu-title", menu).html("");
  $(".mobile-menu-head", menu).removeClass("active");
}

$(window).on("resize", function () {
  if ($(this).innerWidth() > 991) {
    if (menu.hasClass("active")) {
      toggleMenu();
    }
  }
});


$('.owl-board').owlCarousel({
  nav: true,
    loop:true,
    center: true,
    margin:40,
    dots:false,
    smartSpeed:800,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
$( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
