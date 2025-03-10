import favorites_icon from "./images/favorites_icon.png";
import lists_icon from "./images/lists_icon.png";
import expand_icon from "./images/expand_icon.png";
import add_icon from "./images/add.png";

import addTask from "./tasks";
import { expandHeader } from "./renderPage";

export default function attachListeners() {
    const expandableHeaders = document.querySelectorAll(".expandable");
    const newTask = document.querySelector("#new-task");
    const navIcons = document.querySelectorAll(".nav-icon");

    expandableHeaders.forEach(header => {
        header.addEventListener('mouseover', () => {
            const icon = document.querySelector(`#${header.id}-icon`);
            icon.src = expand_icon;

            if (header.id === "lists") {
                let addIcon = document.querySelector("#add-icon");
                if (!addIcon) {
                    addIcon = document.createElement("img");
                    addIcon.id = "add-icon";
                    addIcon.classList.add("nav-icon");
                    addIcon.src = add_icon;
                    document.querySelector("#lists-header").appendChild(addIcon);
                }
            
                addIcon.addEventListener('mouseover', () => {
                    addIcon.style.backgroundColor = "var(--bg-color2)";
                })

                addIcon.addEventListener('mouseout', () => {
                    addIcon.style.backgroundColor = "transparent";
                })
            }

            icon.addEventListener('mouseover', () => {
                icon.style.backgroundColor = "var(--bg-color2)";
            })

            icon.addEventListener('mouseout', () => {
                icon.style.backgroundColor = "transparent   ";
            })
        })
    })

    expandableHeaders.forEach(header => {
        header.addEventListener('mouseleave', () => {
            const icon = document.querySelector(`#${header.id}-icon`);
            const addIcon = document.querySelector("#add-icon");

            icon.src = header.id === "favorites" ? favorites_icon : lists_icon;

            if (header.id === "lists") {

                if(addIcon) {
                    document.querySelector("#lists-header").removeChild(addIcon);
                }
            }
        })
    });

    navIcons.forEach(navIcon => {
        if (navIcon.id !== "add-icon") {
            navIcon.addEventListener('click', expandHeader);
        }
    });

    newTask.addEventListener('click', addTask)
}