import Appetizers from './data/menu/appetizers.csv';
import Pizzas from './data/menu/pizza.csv';
import Pasta from './data/menu/pasta.csv';
import Desserts from './data/menu/desserts.csv';

const displayController = (()=> {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const createTabButtons = () => {
        const appetizersButton = document.createElement('button');
        const pizzasButton = document.createElement('button');
        const pastaButton = document.createElement('button');
        const dessertsButton = document.createElement('button');

        appetizersButton.textContent = "Appetizers";
        pizzasButton.textContent = "Pizza";
        pastaButton.textContent = "Pasta";
        dessertsButton.textContent = "Desserts";

        const tabsButtonsContainer = document.createElement('div');
        tabsButtonsContainer.classList.add('tabs-container');
        tabsButtonsContainer.appendChild(appetizersButton);
        tabsButtonsContainer.appendChild(pizzasButton);
        tabsButtonsContainer.appendChild(pastaButton);
        tabsButtonsContainer.appendChild(dessertsButton);

        return tabsButtonsContainer;
    }

    const displayContent = (container) => {
        container.appendChild(createTabButtons());
        container.appendChild(menuContainer);
    }

    return { displayContent };
})();

export default displayController;