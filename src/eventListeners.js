import { toggleHeader, addToFavorites, removeFromFavorites, buildProjectList, toggleAddProjectModal } from "./display";
import { addProject } from "./projects";

export default function attachListeners(element = "") {
    const expandableHeaders = document.querySelectorAll(".expandable");
    const addProjectBtn = document.querySelector("#add-project-icon");
    const projectLists = document.querySelector("#projects-list").firstElementChild.children;
    const projectName = document.querySelector("#project-name");
    
    if (!element == "") {

        switch (element.id) {
            case "add-project-btn":
                element.addEventListener("click", () => {
                    let projects = [];
            
                    if (projectLists.length > 0) {
                        [...projectLists].forEach(project => {
                            projects.push(project.firstElementChild.innerHTML);
                        });
                    }
            
                    projects.push(projectName.value.trim());
            
                    buildProjectList(projects)
                    projectName.value = "";
            
                    toggleAddProjectModal()
                }, {once: true}); // to avoid stacking up eventlisteners
    
                break;
    
            case "cancel-btn":
                element.addEventListener("click", () => {
                    projectName.value = "";
                    projectModal.classList.toggle('active');
                    overlay.style.display = "none";
                }, {once: true});
    
                break;
        }        
    }
    else {
        expandableHeaders.forEach(header => {
            header.addEventListener("click", (event) => {
               toggleHeader(event.target)
            })
        });
   
        addProjectBtn.addEventListener("click", (event) => {
            addProject();
            event.stopPropagation();
        })
    }
}