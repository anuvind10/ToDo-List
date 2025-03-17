// Handles rendering of pages

import calendar_icon from "./images/calendar_icon.png";
import favourites_icon from "./images/favourites_icon.png";
import projects_icon from "./images/projects_icon.png";
import todo_icon from "./images/todolist_icon.png";
import add_icon from "./images/add.png";
import home_icon from "./images/home_icon.png";
import expand_icon from "./images/expand_icon.png";
import collapse_icon from "./images/collapse_icon.png";
import addFavouritesIcon from "./images/favourites_add_icon.png";
import favouritesAddedIcon from "./images/favourites_added_icon.png"

export function renderIcons() {
    const elements = [
        { name: "home", icon: home_icon, type: "nav" },
        { name: "today", icon: calendar_icon, type: "nav" },
        { name: "favourites", icon: favourites_icon, type: "nav" },
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
    let toggleElement;

    toggleElement = element.parentElement.tagName.toLowerCase() === "button" ? element.parentElement : element
    
    const elementToExpand = toggleElement.nextElementSibling;
    const icon = document.querySelector(`#${toggleElement.id.split("-")[0]}-expand-icon`);

    if (elementToExpand.classList.contains("show")) {
        elementToExpand.classList.remove("show");
        icon.src = expand_icon;
    }
    else {
        elementToExpand.classList.add("show");
        icon.src = collapse_icon;
    }
}

export function buildProjectList(projects) {
    const projectLists = document.querySelector("#projects-list");
    const projectHeader = document.querySelector("#projects-dropdown-btn");
    const favouritesList = document.querySelector("#favourites-list");

    projectLists.firstElementChild.innerHTML = "";

    let idCounter = 0;

    projects.forEach(project => {
        const newProject = document.createElement('li');
        newProject.innerHTML = project;
        newProject.id = project + `-${idCounter}`;
        idCounter++;

        const div = document.createElement('div');
        const img = document.createElement('img');

        div.classList.add("project");
        img.classList.add('icon');
        img.classList.add('add-fav-icon');
        img.src = addFavouritesIcon;
        
        div.appendChild(newProject);
        div.appendChild(img);
    
        projectLists.firstElementChild.appendChild(div);

        if (!projectLists.classList.contains('show'))
            toggleHeader(projectHeader);

        img.addEventListener('click', (event) => {
            if (img.src === addFavouritesIcon) {
                img.src = favouritesAddedIcon;
                addToFavorites(event.target.previousElementSibling);
            }
            else {
                img.src = addFavouritesIcon;
                removeFromFavorites(event.target.previousElementSibling);
            }
        })
    });
}

export function addToFavorites(project) {
    const favouritesList = document.querySelector("#favourites-list");
    const newFavourite = document.createElement("li");

    newFavourite.innerHTML = project.innerHTML;
    newFavourite.id = project.id;
    favouritesList.firstElementChild.appendChild(newFavourite);

    if (!favouritesList.classList.contains("show")) {
        toggleHeader(favouritesList)
    }
}

export function removeFromFavorites(project) {
    const favouritesList = document.querySelector("#favourites-list");
    const projectToRemove = document.querySelector(`#${project.id}`);

    favouritesList.firstElementChild.removeChild(projectToRemove);
}