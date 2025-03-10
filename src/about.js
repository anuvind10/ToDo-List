export default function pageLoad(content) {
    const aboutHeader = document.createElement('p');
    aboutHeader.id = "aboutHeader";
    aboutHeader.innerHTML = "About Us";

    const aboutTextContent = [
        "Nestled in the heart of the city, Café Obscura is more than just a coffee shop—it's an immersive experience into the rich, complex depths of coffee culture. Our name is inspired by the Camera Obscura, an ancient device that captured light and shadow, much like the way our carefully brewed coffee captures the essence of flavor, aroma, and tradition.",
        "Founded by a group of passionate coffee enthusiasts and world travelers, Café Obscura was born from a desire to bring the most exquisite coffee beans from around the globe to a single place of gathering. Our coffee is sourced from the highlands of Ethiopia, the volcanic soils of Guatemala, and the lush plantations of Sumatra, each bean carrying a story of its own.",
        "At Café Obscura, every cup is a carefully crafted masterpiece, from the bold Obscura Espresso to the smooth and ethereal Dark Matter Cold Brew. Pair your drink with our selection of artisanal pastries, gourmet brunch offerings, or decadent desserts, all made with the same level of precision and care.",
        "Designed with a moody, intimate ambiance, Café Obscura invites you to escape the ordinary—whether it's a quiet morning with a Velvet Noir Latte or a late-night conversation over a Tiramisu Obscura. Here, coffee is not just a drink; it’s an exploration, a ritual, and a story waiting to be shared.",
        "☕ Café Obscura - Discover the Dark Side of Coffee"
    ];

    const aboutPage = document.createElement('div');
    aboutPage.id = "aboutPage";
    aboutPage.appendChild(aboutHeader);

    aboutTextContent.forEach(paragraph => {
        const aboutText = document.createElement('p');
        aboutText.classList.add('aboutText');
        aboutText.innerHTML = paragraph;
        aboutPage.appendChild(aboutText);
    });


    content.appendChild(aboutPage);
}