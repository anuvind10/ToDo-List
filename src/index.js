import "./styles.css"
import cafeBackground from  "./images/background2.jpg";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function pageLoad() {
    document.body.style.backgroundImage = `url(${cafeBackground})`;

    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');
    const content = document.querySelector('#content');
    
    function loadPage(loadFunction) {
        content.classList.add('blur-out');
        content.innerHTML = '';
        loadFunction(content);
        content.classList.remove('blur-out');
        content.classList.add('blur-in');
        setTimeout(() => {
            content.classList.remove('blur-in');    
        }, 400);
    }

    homeBtn.addEventListener('click', () => loadPage(loadHome));
    menuBtn.addEventListener('click', () => loadPage(loadMenu));
    aboutBtn.addEventListener('click', () => loadPage(loadAbout));
    loadHome(content)
}


document.addEventListener('DOMContentLoaded', pageLoad);