export default function pageLoad(content) {
    const introDiv = document.createElement('div');
    const cafeNameDiv = document.createElement('div');
    const cafeName = document.createElement('p');
    const headline = document.createElement('p');
    const subText = document.createElement('p');
    const line = document.createElement('hr');

    const homePage = document.createElement('div');
    
    homePage.id = "homePage"
    cafeName.id = "cafeName"
    introDiv.id = "introDiv"
    cafeNameDiv.id = "cafeNameDiv"
    headline.id = "headline"
    subText.id = "subText"

    headline.innerHTML = "Discover the Dark Side of Coffee";
    cafeName.innerHTML = "Café Obscura"
    subText.innerHTML = "Where every sip is a journey through bold flavors and rich aromas."

    cafeNameDiv.appendChild(cafeName);
    cafeNameDiv.appendChild(line);

    introDiv.appendChild(headline);
    introDiv.appendChild(subText);
    homePage.appendChild(cafeNameDiv);
    homePage.appendChild(introDiv); 

    content.appendChild(homePage);

}