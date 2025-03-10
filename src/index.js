import "./styles.css";
import user_icon from "./images/user.png";
import expand_icon from "./images/expand_icon.png";
import calendar_icon from "./images/calendar_icon.png";
import favorites_icon from "./images/favorites_icon.png";
import lists_icon from "./images/lists_icon.png";
import todo_icon from "./images/todolist_icon.png";
import addTask from "./tasks";

const expandableHeaders = document.querySelectorAll(".expandable");
const newTask = document.querySelector("#new-task");
const banner = document.querySelector("#heading-banner");
const todoHeader = document.querySelector("#todo-header");

function pageLoad() {
    const navHeaders = [
        {header: "today", icon: calendar_icon},
        {header: "favorites", icon: favorites_icon},
        {header: "lists", icon: lists_icon}
    ] ;

    navHeaders.forEach(navHeader => {
        const headerIcon = document.createElement("img");
        headerIcon.src = navHeader.icon;
        headerIcon.id = `${navHeader.header}-icon`;
        headerIcon.classList.add("nav-icon");

        const header = document.querySelector(`#${navHeader.header}-header`);
        header.prepend(headerIcon);
    });

    const userIcon = document.createElement("img");
    userIcon.id="user-icon";
    userIcon.src = user_icon
    banner.appendChild(userIcon);

    const todoIcon = document.createElement("img");
    todoIcon.id="todo-icon";
    todoIcon.src = todo_icon
    todoHeader.prepend(todoIcon);

    attachListeners();
}

function attachListeners() {
    expandableHeaders.forEach(header => {
        header.addEventListener('mouseover', () => {
            const icon = document.querySelector(`#${header.id.split('-')[0]}-icon`);        
            icon.src = expand_icon;
        })
    })

    expandableHeaders.forEach(header => {
        header.addEventListener('mouseout', () => {
            const icon = document.querySelector(`#${header.id.split('-')[0]}-icon`);        
            icon.src = header.id.split('-')[0] === "favorites" ? favorites_icon : lists_icon;
        })
    });

    newTask.addEventListener('click', addTask)
}
document.addEventListener("DOMContentLoaded", pageLoad);