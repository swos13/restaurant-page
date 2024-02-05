import Appetizers from './data/menu/appetizers.csv';
import Pizzas from './data/menu/pizza.csv';
import Pasta from './data/menu/pasta.csv';
import Desserts from './data/menu/desserts.csv';

const displayController = (()=> {

    const displayContent = (container) => {
        console.log(Appetizers);
        console.log(Pizzas);
        console.log(Pasta);
        console.log(Desserts);
    }

    return { displayContent };
})();

export default displayController;