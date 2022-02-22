const menuItem = Array.from(document.getElementsByClassName("menu__item"));


for (let item of menuItem) {
    if (!item.closest(".menu.menu_sub") && item.querySelector(".menu.menu_sub") !== null) {
        item.querySelector(".menu__link").onclick = function () {
            if (!item.querySelector(".menu.menu_sub.menu_active")) {
                item.querySelector(".menu.menu_sub").className = "menu menu_sub menu_active";
            } else {
                item.querySelector(".menu.menu_sub").className = "menu menu_sub";
            }

            menuItem.find((elem) => {
                if (!elem.closest(".menu.menu_sub") && elem.querySelector(".menu.menu_sub") !== null && elem.querySelector(".menu__link") !== this && elem.querySelector(".menu.menu_sub.menu_active")) {
                    elem.querySelector(".menu.menu_sub").className = "menu menu_sub";
                }
            })

            return false;
        }
    }
}