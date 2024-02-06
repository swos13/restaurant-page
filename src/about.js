import OurFood from './data/about/our-food.txt';
import OurHistory from './data/about/our-history.txt';

const displayController = (()=> {

    const displayContent = (container) => {
        container.setAttribute('class', 'about');
        const header = document.createElement('h2');
        const foodHeader = document.createElement('h4');
        const foodPara = document.createElement('p');
        const historyHeader = document.createElement('h4');
        const historyPara = document.createElement('p');

        header.textContent = "About us...";
        foodHeader.textContent = "Our food...";
        historyHeader.textContent = "Our history...";
        foodPara.textContent = OurFood;
        historyPara.textContent = OurHistory;

        container.appendChild(header);
        container.appendChild(foodHeader);
        container.appendChild(foodPara);
        container.appendChild(historyHeader);
        container.appendChild(historyPara);
    }

    return { displayContent };
})();

export default displayController;