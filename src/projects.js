import { toggleHeader, addToFavorites, removeFromFavorites, buildProjectList } from "./display";


export function addProject() {
    const projectModal = document.querySelector("#projectModal");
    const overlay = document.querySelector("#overlay");
    const addProjectBtn = document.querySelector("#add-project-btn");
    const cancelBtn = document.querySelector("#cancel-btn");
    const projectName = document.querySelector("#project-name");
    const projectLists = document.querySelector("#projects-list").firstElementChild.childNodes;
    
    projectModal.classList.toggle('active');
    overlay.style.display = "block";

    addProjectBtn.addEventListener("click", () => {
        let projects = [];

        if (projectLists.length > 0) {
            projectLists.forEach(project => {
                projects.push(project.firstElementChild.innerHTML);
            });
        }

        projects.push(projectName.value.trim());

        buildProjectList(projects)
        projectName.value = "";

        projectModal.classList.toggle('active');
        overlay.style.display = "none";
    }, {once: true}); // to avoid stacking up eventlisteners

    cancelBtn.addEventListener("click", () => {
        projectName.value = "";
        projectModal.classList.toggle('active');
        overlay.style.display = "none";
    }, {once: true});
}