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

        console.log(OurFood);
        console.log(OurHistory);
    }

    return { displayContent };
})();

export default displayController;