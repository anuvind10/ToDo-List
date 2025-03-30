import * as updateDisplay from "./display";
import * as tasks from "./tasks";
import { addProject } from "./projects";

export default function attachListeners(element = "") {
    const expandableHeaders = document.querySelectorAll(".expandable");
    const addProjectBtn = document.querySelector("#add-project-icon");
    const projectName = document.querySelector("#project-name");
    const addTaskBtn = document.querySelector("#add-task-icon");
    const today = document.querySelector("#today");
    const thisWeek = document.querySelector("#thisWeek");
    
    if (!element == "") {
        switch (true) {
            case element.id === "add-project-btn":
                element.addEventListener("click", () => {
                    let projects = getProjectList();
            
                    updateDisplay.renderProjectList(projects)
                    projectName.value = "";
            
                    updateDisplay.toggleAddProjectModal()
                }, {once: true}); // to avoid stacking up eventlisteners
    
                break;
    
            case element.id === "cancel-btn":
                element.addEventListener("click", () => {
                    projectName.value = "";
                    projectModal.classList.toggle('active');
                    overlay.style.display = "none";
                }, {once: true});
    
                break;

            case element.id === "img_div":
                element.addEventListener("click", (event) => {
                    tasks.getTaskList(event.target);
                })
                break;

            case element.classList.contains("taskCheckbox"):
                element.addEventListener("click", (event) => {
                    tasks.updateTask(event.target);
                })
                break;

            case element.cc:
                element.addEventListener("click", (event) => {
                    updateDisplay.toggleActiveProject(event.target);
                });
                break;

            case element.classList.contains("remove-icon"):
                removeIcon.addEventListener('click', (event) => {
                    updateDisplay.removeProject(event.target);
                    event.stopPropagation();
                })
                break;

            default:
                break;
        }        
    }
    else {
        const defaultProject = document.querySelector("#Default-0");
        const archiveProject = document.querySelector("#Archive-9999");

        expandableHeaders.forEach(header => {
            header.addEventListener("click", (event) => {
               updateDisplay.toggleHeader(event.target)
            })
        });
   
        addProjectBtn.addEventListener("click", (event) => {
            addProject();
            event.stopPropagation();
        })

        addTaskBtn.addEventListener("click", (event) => {
            tasks.getTaskList(event.target);
        });
        
        today.addEventListener("click", (event) => {
            tasks.getTaskList(event.target)
        })

        thisWeek.addEventListener("click", (event) => {
            tasks.getTaskList(event.target)
        })

        defaultProject.addEventListener("click", (event) => {
            updateDisplay.toggleActiveProject(event.target);
        })

        archiveProject.addEventListener("click", (event) => {
            updateDisplay.toggleActiveProject(event.target);
        })
    }
}

function getProjectList() {
    const projectName = document.querySelector("#project-name");
    const projectLists = [...document.querySelector("#projects-list").firstElementChild.children];

    let projects = [];

    if (projectLists.length > 0) {
        projectLists.forEach(project => {
            projects.push(project.firstElementChild.innerHTML);
        });
    }
    
    projects.push(projectName.value.trim());
    
    return projects;
}