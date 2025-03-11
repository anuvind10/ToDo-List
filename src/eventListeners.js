import { expandHeader, toggleHeader } from "./renderPage";

export default function attachListeners() {
     const expandableHeaders = document.querySelectorAll(".expandable");

     expandableHeaders.forEach(header => {
        header.addEventListener("click", toggleHeader)
     });
}