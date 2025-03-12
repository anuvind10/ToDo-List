import { toggleHeader } from "./display";
import { addProject } from "./projects";

export default function attachListeners() {
     const expandableHeaders = document.querySelectorAll(".expandable");
     const addProjectBtn = document.querySelector("#add-project-icon");

     expandableHeaders.forEach(header => {
        header.addEventListener("click", toggleHeader)
     });


     addProjectBtn.addEventListener("click", addProject)
}