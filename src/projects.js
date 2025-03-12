import { renderNewList } from "./display";

export function addProject() {
    const projectModal = document.querySelector("#projectModal");
    const overlay = document.querySelector("#overlay");
    const addProjectBtn = document.querySelector("#add-project-btn");
    
    projectModal.classList.toggle('active');
    overlay.style.display = "block";

    addProjectBtn.addEventListener("click", () => {
        const projectLists = document.querySelector("#projects-list");
        const projectName = document.querySelector("#project-name").value;

        projectModal.classList.toggle('active');
        overlay.style.display = "none";

        const project = document.createElement('li');
        project.innerHTML = projectName;

        projectLists.firstElementChild.appendChild(project);
    })
}