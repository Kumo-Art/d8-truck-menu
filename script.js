// ----- data -----

const menu = [
    { name: "Carne asada", price: 3.50, spicy: false, soldOut: false },
    { name: "Al pastor", price: 3.75, spicy: true, soldOut: false },
    { name: "Chicken, when we have it", price: 4.50, spicy: false, soldOut: true },
    { name: "Just the meat", price: 3.00, spicy: false, soldOut: false }
];


// ----- elements -----

const menuList = document.getElementById("menu-list");
const refreshButton = document.getElementById("refresh-button");

// ----- functions -----

function drawMenu() {
    menuList.replaceChildren();
    
    for (let i = 0; i < menu.length; i++) {
        const row = document.createElement("li");
        row.id = `row-${i}`;
        row.textContent = `${menu[i].name} - ${menu[i].price}`;

        if (menu[i].soldOut === true) {
            row.classList.add("sold-out");
        }

        menuList.appendChild(row);
    }
}

// ----- listeners -----

refreshButton.addEventListener("click", drawMenu);


// ----- run at load -----

drawMenu();