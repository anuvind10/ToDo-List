import { toggleHeader } from "./display";

export function addProject() {
    const projectModal = document.querySelector("#projectModal");
    const overlay = document.querySelector("#overlay");
    const addProjectBtn = document.querySelector("#add-project-btn");
    const cancelBtn = document.querySelector("#cancel-btn");
    const projectName = document.querySelector("#project-name");
    
    projectModal.classList.toggle('active');
    overlay.style.display = "block";

    addProjectBtn.addEventListener("click", () => {
        const projectLists = document.querySelector("#projects-list");
        const projectHeader = document.querySelector("#projects-dropdown-btn");

        const project = document.createElement('li');
        project.innerHTML = projectName.value;
        projectName.value = "";

        projectModal.classList.toggle('active');
        overlay.style.display = "none";

        projectLists.firstElementChild.appendChild(project);
        if (!projectLists.classList.contains('show'))
            toggleHeader(projectHeader);

    }, {once: true}); // to avoid stacking up eventlisteners

    cancelBtn.addEventListener("click", () => {
        projectName.value = "";
        projectModal.classList.toggle('active');
        overlay.style.display = "none";
    }, {once: true});
}