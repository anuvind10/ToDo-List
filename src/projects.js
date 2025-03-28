import { toggleHeader, addToFavorites, removeFromFavorites, buildProjectList, toggleAddProjectModal } from "./display";
import attachListeners from "./eventListeners"


export function addProject() {
    const overlay = document.querySelector("#overlay");
    const addProjectBtn = document.querySelector("#add-project-btn");
    const cancelBtn = document.querySelector("#cancel-btn");
    const projectName = document.querySelector("#project-name");
    const projectLists = document.querySelector("#projects-list").firstElementChild.childNodes;
    
    toggleAddProjectModal();

    attachListeners(addProjectBtn);
    attachListeners(cancelBtn);
    
}