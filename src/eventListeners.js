import * as updateDisplay from "./display";
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
            
                    updateDisplay.buildProjectList(projects)
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
                element.addEventListener("click", createNewTask)
                break;

            case element.classList.contains("taskCheckbox"):
                element.addEventListener("click", (event) => {
                    updateDisplay.updateTask(event.target);
                })
                break;

            case element.classList.contains("project"):
                element.addEventListener("click", (event) => {
                    updateDisplay.toggleActiveProject(event.target);
                });
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

        addTaskBtn.addEventListener("click", createNewTask);
        
        today.addEventListener("click", (event) => {
            updateDisplay.renderTasks(event.target);
        })

        thisWeek.addEventListener("click", (event) => {
            updateDisplay.renderTasks(event.target);
        })

        defaultProject.addEventListener("click", (event) => {
            updateDisplay.toggleActiveProject(event.target);
        })

        archiveProject.addEventListener("click", (event) => {
            updateDisplay.toggleActiveProject(event.target);
        })
    }
}

function createNewTask() {
    const taskList = [...document.querySelector("#task-list").children];
    let tasks = [];
            
    if (taskList.length > 0) {
        taskList.forEach(task => {
            if (task.id != "img_div") {
                tasks.push(task);
            }
        });
    }
    updateDisplay.addTask(tasks);
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