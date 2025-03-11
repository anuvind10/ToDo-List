import "./styles.css";

import attachListeners from "./eventListeners";
import { addTask } from "./tasks";
import * as renderPage from "./renderPage";


function pageLoad() {
    renderPage.renderIcons();
    attachListeners();
}

document.addEventListener("DOMContentLoaded", pageLoad);