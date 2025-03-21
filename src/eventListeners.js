import { toggleHeader, addToFavorites, removeFromFavorites, buildProjectList, toggleAddProjectModal, addTask } from "./display";
import { addProject } from "./projects";

export default function attachListeners(element = "") {
    const expandableHeaders = document.querySelectorAll(".expandable");
    const addProjectBtn = document.querySelector("#add-project-icon");
    const projectLists = [...document.querySelector("#projects-list").firstElementChild.children];
    const projectName = document.querySelector("#project-name");
    const addTaskBtn = document.querySelector("#add-task-icon");
    
    if (!element == "") {

        switch (element.id) {
            case "add-project-btn":
                element.addEventListener("click", () => {
                    let projects = [];
            
                    if (projectLists.length > 0) {
                        projectLists.forEach(project => {
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

            case "img_div":
                element.addEventListener("click", createNewTask)
                break;

            default:
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

        addTaskBtn.addEventListener("click", createNewTask);
    }
}

function createNewTask() {
    const taskList = [...document.querySelector("#task-list").children];
    let tasks = [];
            
    if (taskList.length > 0) {
        if (taskList[0].id != "empty-task-list") {
            taskList.forEach(task => {
                if (task.id != "img_div") {
                    tasks.push(task);
                }
            });
        }
        
    }
    addTask(tasks)  
}