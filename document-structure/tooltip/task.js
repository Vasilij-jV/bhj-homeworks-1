const toolTip = Array.from(document.querySelectorAll(".has-tooltip"));

function addTooltipActive(event) {

    if (event.target.nextElementSibling && !event.target.nextElementSibling.classList.contains("tooltip_active")) {
        event.target.insertAdjacentHTML("afterEnd", '<div class="tooltip" data-position="top: 0; left: 0;">Текст подсказки</div>');
        event.target.nextElementSibling.classList.add("tooltip_active");
    }else if (!event.target.nextElementSibling) {
        event.target.insertAdjacentHTML("afterEnd", '<div class="tooltip" data-position="top: 0; left: 0;">Текст подсказки</div>');
        event.target.nextElementSibling.classList.add("tooltip_active");
    }else {
        event.target.nextElementSibling.classList.remove("tooltip_active");
    }

    for (let item of toolTip) {
        if (item.nextElementSibling && item.nextElementSibling !== event.target.nextElementSibling && item.nextElementSibling.classList.contains("tooltip_active")) {
            item.nextElementSibling.classList.remove("tooltip_active");
        }
    }

    
    let value = event.target.getBoundingClientRect();
    event.target.nextElementSibling.setAttribute("style", `top: ${value.bottom}px; left: ${value.x}px;`);
    event.target.nextElementSibling.innerText = event.target.getAttribute("title");   
}


for (let tool of toolTip) {
    tool.onclick = function () { return false; }
    tool.addEventListener("click", addTooltipActive);
}