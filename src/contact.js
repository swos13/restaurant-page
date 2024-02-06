const displayController = (()=> {

    const displayContent = (container) => {
        container.setAttribute('class', 'contact');
        const contentContainer = document.createElement('div');
        const header = document.createElement('h2');
        const addressContainer = document.createElement('div');
        const contactContainer = document.createElement('div');
        const openContainer = document.createElement('div');
        const addressHeader = document.createElement('h3');
        const street = document.createElement('p');
        const city = document.createElement('p');
        const contactHeader = document.createElement('h3');
        const phone = document.createElement('p');
        const email = document.createElement('p');
        const openHeader = document.createElement('h3');
        const open = document.createElement('p');

        contentContainer.classList.add('content-container');
        header.textContent = "Contact";
        addressHeader.textContent = "Address";
        street.textContent = "10 Imaginary St";
        city.textContent = "61-772 Poznań";
        contactHeader.textContent = "Booking and takeaway";
        phone.textContent = "Tel.: +48 999 999 999";
        email.textContent = "Email: contact@cocinera.pl";
        openHeader.textContent = "Open";
        open.textContent = "Everyday 12PM - 10PM";
        
        addressContainer.appendChild(addressHeader);
        addressContainer.appendChild(street);
        addressContainer.appendChild(city);
        contactContainer.appendChild(contactHeader);
        contactContainer.appendChild(phone);
        contactContainer.appendChild(email);
        openContainer.appendChild(openHeader);
        openContainer.appendChild(open);

        contentContainer.appendChild(addressContainer);
        contentContainer.appendChild(contactContainer);
        contentContainer.appendChild(openContainer);

        container.appendChild(header);
        container.appendChild(contentContainer);
    }

    return { displayContent };
})();

export default displayController;