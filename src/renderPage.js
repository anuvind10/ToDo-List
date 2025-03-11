// Handles rendering of pages

import calendar_icon from "./images/calendar_icon.png";
import favorites_icon from "./images/favorites_icon.png";
import projects_icon from "./images/projects_icon.png";
import user_icon from "./images/user.png";
import todo_icon from "./images/todolist_icon.png";
import add_icon from "./images/add.png";
import home_icon from "./images/home_icon.png";
import expand_icon from "./images/expand_icon.png";
import collapse_icon from "./images/collapse_icon.png";

export function renderIcons() {
    const elements = [
        { name: "home", icon: home_icon, type: "nav" },
        { name: "today", icon: calendar_icon, type: "nav" },
        { name: "favorites", icon: favorites_icon, type: "nav" },
        { name: "projects", icon: projects_icon, type: "nav" },
        { name: "favorites-expand", icon: expand_icon, type: "nav" },
        { name: "projects-expand", icon: expand_icon, type: "nav" },
        { name: "logo", icon: todo_icon, type: "nav" }
    ];

    elements.forEach(element => {
        const imgElement = document.querySelector(`#${element.name}-icon`);
        imgElement.src = element.icon;

        // const elementIcon = document.createElement("img");
        // elementIcon.src = element.icon;
        // elementIcon.id = `${element.name}-icon`;
        // elementIcon.classList.add(`${element.type}-icon`);

        // if (element.type === "nav") {
        //     if (element.name === "add") {
        //         const navHeader = document.querySelector("#lists-header");
        //         navHeader.appendChild(elementIcon);
        //         return;
        //     }
        //     const navHeader = document.querySelector(`#${element.name}-header`);
        //     navHeader.prepend(elementIcon);
        // }
        // else {
        //     if (element.name === "todo") {
        //         const todoHeader = document.querySelector("#todo-logo");
        //         todoHeader.prepend(elementIcon);
        //     }
        //     else {
        //         const banner = document.querySelector("#user-logo");
        //         banner.appendChild(elementIcon);
        //     }
        // }
    });
}

// export function expandHeader() {
//     return console.log("Header expanded");
// }

// export function renderNewList() {
    
// }