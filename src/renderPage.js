import calendar_icon from "./images/calendar_icon.png";
import favorites_icon from "./images/favorites_icon.png";
import lists_icon from "./images/lists_icon.png";
import user_icon from "./images/user.png";
import todo_icon from "./images/todolist_icon.png";
import add_icon from "./images/add.png";

export function renderIcons() {
    const elements = [
        { name: "today", icon: calendar_icon, type: "nav" },
        { name: "favorites", icon: favorites_icon, type: "nav" },
        { name: "lists", icon: lists_icon, type: "nav" },
        { name: "heading-banner", icon: user_icon, type: "logo" },
        { name: "todo", icon: todo_icon, type: "logo" }
    ];

    elements.forEach(element => {
        const elementIcon = document.createElement("img");
        elementIcon.src = element.icon;
        elementIcon.id = `${element.name}-icon`;
        elementIcon.classList.add(`${element.type}-icon`);

        if (element.type === "nav") {
            if (element.name === "add") {
                const navHeader = document.querySelector("#lists-header");
                navHeader.appendChild(elementIcon);
                return;
            }
            const navHeader = document.querySelector(`#${element.name}-header`);
            navHeader.prepend(elementIcon);
        }
        else {
            if (element.name === "todo") {
                const todoHeader = document.querySelector("#todo-logo");
                todoHeader.prepend(elementIcon);
            }
            else {
                const banner = document.querySelector("#user-logo");
                banner.appendChild(elementIcon);
            }
        }
    });
}

export function expandHeader() {
    return console.log("Header expanded");
}