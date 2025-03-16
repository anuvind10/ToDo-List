// Handles rendering of pages

import calendar_icon from "./images/calendar_icon.png";
import favorites_icon from "./images/favorites_icon.png";
import projects_icon from "./images/projects_icon.png";
import todo_icon from "./images/todolist_icon.png";
import add_icon from "./images/add.png";
import home_icon from "./images/home_icon.png";
import expand_icon from "./images/expand_icon.png";
import collapse_icon from "./images/collapse_icon.png";

export function renderIcons() {
    const elements = [
        { name: "home", icon: home_icon, type: "nav" },
        { name: "today", icon: calendar_icon, type: "nav" },
        { name: "favourites", icon: favorites_icon, type: "nav" },
        { name: "projects", icon: projects_icon, type: "nav" },
        { name: "favourites-expand", icon: expand_icon, type: "nav" },
        { name: "projects-expand", icon: expand_icon, type: "nav" },
        { name: "logo", icon: todo_icon, type: "nav" },
        { name: "add-project", icon: add_icon, type: "nav" }
    ];

    elements.forEach(element => {
        const imgElement = document.querySelector(`#${element.name}-icon`);
        imgElement.src = element.icon;
    });
}

export function toggleHeader(element) {
    const toggleElement = element.id.split('-')[0]
    const elementToExpand = document.querySelector(`#${toggleElement}-list`);
    const icon = document.querySelector(`#${toggleElement}-expand-icon`);

    if (elementToExpand.classList.contains("show")) {
        elementToExpand.classList.remove("show");
        icon.src = expand_icon;
    }
    else {
        elementToExpand.classList.add("show");
        icon.src = collapse_icon;
    }
}

export function renderNewList() {
    return
}