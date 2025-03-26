// Handles rendering of pages

import today_icon from "./images/today_icon.png";
import favourites_icon from "./images/favourites_icon.png";
import projects_icon from "./images/projects_icon.png";
import todo_icon from "./images/todolist_icon.png";
import add_icon from "./images/add.png";
import thisWeek_icon from "./images/week_icon.png";
import expand_icon from "./images/expand_icon.png";
import collapse_icon from "./images/collapse_icon.png";
import addFavourites_icon from "./images/favourites_add_icon.png";
import favouritesAdded_icon from "./images/favourites_added_icon.png";
import remove_icon from "./images/close_icon.png";
import addTask_icon from "./images/add_task_icon.png";
import addTask_icon2 from "./images/add_task_icon2.png";
import attachListeners from "./eventListeners";

export function renderIcons() {
    const elements = [
        { name: "today", icon: today_icon },
        { name: "thisWeek", icon: thisWeek_icon },
        { name: "favourites", icon: favourites_icon },
        { name: "projects", icon: projects_icon},
        { name: "favourites-expand", icon: expand_icon },
        { name: "projects-expand", icon: expand_icon },
        { name: "logo", icon: todo_icon },
        { name: "add-fav", icon: addFavourites_icon },
        { name: "add-project", icon: add_icon },
        { name: "add-task", icon: addTask_icon }
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

        const div = document.createElement('div');
        const favouriteIcon = document.createElement('img');
        const removeIcon = document.createElement('img');

        div.id = project + `-${idCounter}`;
        idCounter++;

        div.classList.add("project");
        favouriteIcon.classList.add('icon');
        favouriteIcon.classList.add('add-fav-icon');
        favouritesList.firstElementChild.childNodes.forEach(node => {
            if (node.id === newProject.id) {
                favouriteIcon.src = favouritesAdded_icon;
            }   
            else {
                favouriteIcon.src = addFavourites_icon;
            }
        });

        removeIcon.classList.add('icon');
        removeIcon.classList.add('remove-icon');
        removeIcon.src = remove_icon;
        
        div.appendChild(newProject);
        div.appendChild(favouriteIcon);
        if (project != "Default") {
            div.appendChild(removeIcon);
        }
        else {
            div.classList.add("activeProject");
        }

        attachListeners(div);
        
        projectLists.firstElementChild.appendChild(div);

        if (!projectLists.classList.contains('show'))
            toggleHeader(projectHeader);

        favouriteIcon.addEventListener('click', (event) => {
            if (favouriteIcon.src === addFavourites_icon) {
                favouriteIcon.src = favouritesAdded_icon;
                addToFavorites(event.target.previousElementSibling);
            }
            else {
                favouriteIcon.src = addFavourites_icon;
                removeFromFavorites(event.target.previousElementSibling);
            }
            event.stopPropagation();
        })

        removeIcon.addEventListener('click', (event) => {
            removeProject(event.target);
            event.stopPropagation();
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
        toggleHeader(favouritesList.previousElementSibling)
    }
}

export function removeFromFavorites(project) {
    const favouritesList = document.querySelector("#favourites-list");
    const projectToRemove = document.querySelector(`#${project.id}`);

    favouritesList.firstElementChild.removeChild(projectToRemove);

    if (favouritesList.firstElementChild.childElementCount === 0) {
        toggleHeader(favouritesList.previousElementSibling);   
    }
}

export function removeProject(event) {
    const projectLists = document.querySelector("#projects-list");
    const favouritesList = document.querySelector("#favourites-list");
    const toRemove = event.parentElement;
    const project = event.parentElement.firstElementChild;

    projectLists.firstElementChild.removeChild(toRemove);
    favouritesList.firstElementChild.childNodes.forEach(node => {
        if (node.id === project.id) {
            favouritesList.firstElementChild.removeChild(node);
        }   
    });

    if (projectLists.firstElementChild.childElementCount === 0) {
        toggleHeader(projectLists.previousElementSibling);
    }

    if (projectLists.childElementCount == 1) {
        const defaultProject = projectLists.firstElementChild.firstElementChild;
        if (!defaultProject.classList.contains("activeProject")) {
            defaultProject.classList.toggle("activeProject");
        }
    }
}

export function toggleAddProjectModal() {
    const projectModal = document.querySelector("#projectModal");

    projectModal.classList.toggle('active');
    overlay.classList.toggle("active");
}

export function addTask(tasks) {
    const currentProject = document.querySelector(".activeProject");
    const priorityListValues = ["Low", "Medium", "High"];

    const taskList = document.querySelector("#task-list");
    taskList.classList.remove("empty");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        if (task.id === "empty-task-list")
            task.style.display = "none";
        
        taskList.appendChild(task);
    });

    const task = document.createElement("div");
    task.classList.add("task");

    const title = document.createElement("input");
    const dueDate = document.createElement("input");
    const dueDateLabel = document.createElement("label");
    const priorityLabel = document.createElement("label");
    const priorityList = document.createElement("select");
    const checkbox = document.createElement("input");

    title.type = "text";
    title.classList.add("taskTitle");
    title.placeholder = "Title";

    const dueDateDiv = document.createElement("div");
    dueDateLabel.for = "dueDate";
    dueDateLabel.innerHTML = "Due Date: ";

    dueDate.name = "dueDate";
    dueDate.type = "date";
    dueDate.value = new Date().toISOString().split("T")[0]
    dueDate.classList.add("taskDueDate");

    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDate);

    const priorityDiv = document.createElement("div");
    priorityLabel.for = "priority";
    priorityLabel.innerHTML = "Priority: ";
    priorityList.name = "priority";
    priorityList.classList.add("taskPriority");

    priorityListValues.forEach(priority => {
        const option = document.createElement("option");
        option.value = priority;
        option.innerHTML = priority;
        priorityList.appendChild(option);
    });

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityList);

    checkbox.type = "checkbox";
    checkbox.classList.add("taskCheckbox");

    let div = document.createElement("div");
    div.appendChild(dueDateDiv);
    div.appendChild(priorityDiv);
    div.appendChild(checkbox);

    task.appendChild(title);
    task.appendChild(div);

    task.setAttribute("data-project", currentProject.id);

    div = document.createElement("div");
    const addTaskIcon = document.createElement("img");
    addTaskIcon.src = addTask_icon2
    addTaskIcon.id = "add-task-icon2"

    div.id = "img_div"
    div.appendChild(addTaskIcon)

    taskList.appendChild(task);
    taskList.appendChild(div);

    attachListeners(div);
}

export function toggleActiveProject(element) {
    const projectList = document.querySelectorAll(".project");

    projectList.forEach(project => {
        if (project.classList.contains("activeProject"))
            project.classList.toggle("activeProject");
    });

    const activeProject = element.id == "" ? element.parentElement : element;
    activeProject.classList.toggle("activeProject");

    renderTasks(activeProject);
}

function renderTasks(activeProject) {
    const tasks = document.querySelectorAll(".task");
    const emptyTaskList = document.querySelector("#empty-task-list");
    const addTask2 = document.querySelector("#img_div");
    const taskList = document.querySelector("#task-list");

    tasks.forEach(task => {
        if (task.getAttribute("data-project") !== activeProject.id) {
            task.style.display = "none";
        }
        else {
            task.style.display = "flex";
        }
    });

    const activeProjectTasks = document.querySelectorAll(`[data-project="${activeProject.id}"]`);

    if (activeProjectTasks.length === 0) {
        emptyTaskList.style.display = "flex";
        addTask2.style.display = "none";
        taskList.classList.add("empty");
    }
    else {
        emptyTaskList.style.display = "none";
        addTask2.style.display = "flex";
        taskList.classList.remove("empty");
    }
}