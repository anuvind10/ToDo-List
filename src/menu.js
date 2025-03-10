export default function pageLoad(content) {
    const sections = [
        { id: 'coffeeDiv', header: 'Signature Coffees & Brews' },
        { id: 'bitesDiv', header: 'Pastries & Light Bites' },
        { id: 'brunchDiv', header: 'All-Day Brunch Specials' },
        { id: 'dessertDiv', header: 'Desserts & Sweet Treats' }
    ];

    const menuPage = document.createElement('div');
    menuPage.id = 'menuPage';
    sections.forEach(section => {
        const header = document.createElement('h3');
        const line = document.createElement('hr');
        header.innerHTML = section.header;

        const div = document.createElement('div');
        div.id = section.id;
        div.classList.add('section');
        div.appendChild(header);
        div.appendChild(line);

        menuPage.appendChild(div);
    });

    const menu = [
        { section: 'coffeeDiv', name: 'Obscura Espresso', description: 'Deep, bold single-origin espresso with a velvety crema.', price: '$4.50' },
        { section: 'coffeeDiv', name: 'Dark Matter Cold Brew', description: 'Slow-steeped, ultra-smooth, and rich with subtle chocolate notes.', price: '$5.00' },
        { section: 'coffeeDiv', name: 'Mocha Eclipse', description: 'Dark chocolate-infused espresso with steamed milk, topped with cocoa dust.', price: '$5.50' },
        { section: 'coffeeDiv', name: 'Velvet Noir Latte', description: 'A luxurious blend of espresso, vanilla bean, and microfoam.', price: '$5.75' },
        { section: 'coffeeDiv', name: 'Caramel Obscura Macchiato', description: 'Double shot espresso, layered with frothy milk and house-made caramel.', price: '$5.50' },
        { section: 'coffeeDiv', name: 'Spanish Midnight Latte', description: 'Sweetened espresso, cold milk, and a hint of cinnamon.', price: '$5.25' },
        { section: 'coffeeDiv', name: 'Matcha Eclipse Latte', description: 'Japanese matcha whisked to perfection with a touch of vanilla.', price: '$5.75' },
        { section: 'bitesDiv', name: 'Golden Butter Croissant', description: 'Flaky, airy, and baked fresh every morning.', price: '$3.75' },
        { section: 'bitesDiv', name: 'Midnight Pain au Chocolat', description: 'A rich chocolate-filled croissant with a dusting of dark cocoa.', price: '$4.25' },
        { section: 'bitesDiv', name: 'MObscura Blueberry Scone', description: 'Buttery scone with fresh blueberries and a citrus zest finish.', price: '$4.00' },
        { section: 'bitesDiv', name: 'Savory Aged Cheddar Biscuit', description: 'Warm, flaky biscuit with aged cheddar and chives.', price: '$4.50' },
        { section: 'brunchDiv', name: 'Obscura Avocado Toast', description: 'Brioche toast topped with creamy avocado, cherry tomatoes, and poached egg.', price: '$8.50' },
        { section: 'brunchDiv', name: 'Smoked Salmon Noir Bagel', description: 'A classic New York-style bagel with smoked salmon, capers, and dill cream cheese.', price: '$9.75' },
        { section: 'brunchDiv', name: 'Truffle Mushroom Grilled Cheese', description: 'Aged cheddar, wild mushrooms, and truffle butter on sourdough.', price: '$10.00' },
        { section: 'brunchDiv', name: 'Spinach & Goat Cheese Quiche', description: 'A delicate balance of creamy egg custard, spinach, and tangy goat cheese.', price: '$8.75' },
        { section: 'dessertDiv', name: 'Tiramisu Obscura', description: 'Espresso-soaked ladyfingers with mascarpone and dark cocoa dusting.', price: '$6.50' },
        { section: 'dessertDiv', name: 'Pistachio & Honey Cake', description: 'Moist sponge cake with pistachio cream and honey drizzle.', price: '$7.00' },
        { section: 'dessertDiv', name: 'Dark Chocolate & Raspberry Tart', description: 'Decadent chocolate ganache with fresh raspberry accents.', price: '$6.75' },
    ]

    let oddEvenFlag = 'O';
    content.appendChild(menuPage);
    menu.forEach(item => {
        const name = document.createElement('h4');
        name.classList.add('menuItemName');
        name.innerHTML = item.name;
        const description = document.createElement('p');
        description.classList.add('menuItemDescription');
        description.innerHTML = item.description;
        const price = document.createElement('p');
        price.classList.add('menuItemPrice');
        price.innerHTML = item.price;

        const div = document.createElement('div');
        div.classList.add('menuItem');
        if (oddEvenFlag === 'O') {
            div.classList.add('odd');
            oddEvenFlag = 'E';
        }
        else {
            div.classList.add('even');
            oddEvenFlag = 'O';
        }
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);

        const section = document.getElementById(item.section);
        section.appendChild(div);
    });

    
}