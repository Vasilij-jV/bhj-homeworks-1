const toolTip = Array.from(document.querySelectorAll(".has-tooltip"));

function addTooltipActive(event) {

    if (!event.target.firstElementChild.classList.contains("tooltip_active")) {
        event.target.firstElementChild.classList.add("tooltip_active");
    } else {
        event.target.firstElementChild.classList.remove("tooltip_active");
    }


    for (let tool of toolTip) {
        if (tool !== event.target && tool.firstElementChild.classList.contains("tooltip_active")) {
            tool.firstElementChild.classList.remove("tooltip_active");
        }
    }

    let width_w = event.target.getBoundingClientRect().width;
    let height_h = event.target.getBoundingClientRect().height;
    event.target.setAttribute("style", `width: ${width_w}, height: ${height_h}`);
    event.target.firstElementChild.innerText = event.target.getAttribute("title");

    
    event.target.firstElementChild.setAttribute("style", event.target.firstElementChild.dataset.position);
    event.target.firstElementChild.style.top = "100%";
    event.target.firstElementChild.style.left = "0%";
}


for (let tool of toolTip) {
    tool.insertAdjacentHTML("afterBegin", '<div class="tooltip" data-position="top: 0; left: 0;">Текст подсказки</div>');
    tool.onclick = function () { return false; }
    tool.addEventListener("click", addTooltipActive);
}