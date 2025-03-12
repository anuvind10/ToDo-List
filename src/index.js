import "./styles.css";

import attachListeners from "./eventListeners";
import { addTask } from "./tasks";
import * as updateDisplay from "./display";


function pageLoad() {
    updateDisplay.renderIcons();
    attachListeners();
}

document.addEventListener("DOMContentLoaded", pageLoad);