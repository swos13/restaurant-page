import FoodImage from './images/food.jpg';

const displayController = (()=> {

    const addElementsToContainer = (container) => {
        const sloganContainer = document.createElement('div');
        const image = document.createElement('img');
        const brandSlogan = document.createElement('h3');
        const mainText = document.createElement('p');
        const menu = document.createElement('p');
        const menuLink = document.createElement('a');
        const phone = document.createElement('p');
        const open = document.createElement('p');

        sloganContainer.classList.add('slogan-container');
        image.src = FoodImage;
        brandSlogan.textContent = "Unique Italian taste";
        mainText.textContent = "We invite you to try our most delicious italian meals in our restaurant in heart of Poznan";
        menu.textContent = "Check out our ";
        menuLink.textContent = "menu";
        phone.textContent = "Book table: +48 999 999 999";
        open.textContent = "We are open everyday 12PM - 10PM";

        menuLink.href = "./menu.html";
        menu.appendChild(menuLink);

        sloganContainer.appendChild(image);
        sloganContainer.appendChild(brandSlogan);
        container.appendChild(sloganContainer);
        container.appendChild(mainText);
        container.appendChild(menu);
        container.appendChild(phone);
        container.appendChild(open);
        container.classList.add('home');
    }

    return { addElementsToContainer };
})();

export default displayController;