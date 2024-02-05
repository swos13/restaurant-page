import Appetizers from './data/menu/appetizers.csv';
import Pizza from './data/menu/pizza.csv';
import Pasta from './data/menu/pasta.csv';
import Desserts from './data/menu/desserts.csv';

const displayController = (()=> {

    const menuContainer = document.createElement('div');
    const menu = new Map();
    const buttons = [];
    menuContainer.classList.add('menu-container');

    const setMenu = () => {
        menu.set('appetizers', Appetizers);
        menu.set('pizza', Pizza);
        menu.set('pasta', Pasta);
        menu.set('desserts', Desserts);
    }

    const clearMenu = () => {
        while(menuContainer.firstChild){
            menuContainer.removeChild(menuContainer.lastChild);
        }
    }

    const showMenu = (menuItems) => {
        clearMenu();
        menuItems.forEach(dish => {
            const dishContainer = document.createElement('div');
            const name = document.createElement('h2');
            name.textContent = dish[0];
            const ingredients = document.createElement('p');
            ingredients.textContent = dish.slice(1, -1).join(", ");
            const price = document.createElement('h5');
            price.textContent = dish.slice(-1);

            dishContainer.appendChild(name);
            dishContainer.appendChild(ingredients);
            dishContainer.appendChild(price);
            menuContainer.appendChild(dishContainer);
        })
    }

    const clearTabsButtonsClass = () => {
        buttons.forEach(button => {
            button.classList.remove('active');
        })
    }

    const doButtonEvent = (button) => {
        button.classList.add('active');
        showMenu(menu.get(button.textContent.toLowerCase()));
    }

    const createTabButtons = () => {
        const appetizersButton = document.createElement('button');
        const pizzasButton = document.createElement('button');
        const pastaButton = document.createElement('button');
        const dessertsButton = document.createElement('button');

        appetizersButton.textContent = 'Appetizers';
        pizzasButton.textContent = 'Pizza';
        pastaButton.textContent = 'Pasta';
        dessertsButton.textContent = 'Desserts';

        buttons.push(appetizersButton, pizzasButton, pastaButton, dessertsButton);
        buttons.forEach(button => {
            button.id = button.textContent.toLowerCase();
            button.addEventListener('click', () => {
                clearTabsButtonsClass();
                doButtonEvent(button);
            })
        });

        const tabsButtonsContainer = document.createElement('div');
        tabsButtonsContainer.classList.add('tabs-container');
        tabsButtonsContainer.appendChild(appetizersButton);
        tabsButtonsContainer.appendChild(pizzasButton);
        tabsButtonsContainer.appendChild(pastaButton);
        tabsButtonsContainer.appendChild(dessertsButton);

        return tabsButtonsContainer;
    }

    const displayContent = (container) => {
        setMenu();
        container.setAttribute('class', 'menu');
        container.appendChild(createTabButtons());
        container.appendChild(menuContainer);
        doButtonEvent(buttons[0]);
    }

    return { displayContent };
})();

export default displayController;