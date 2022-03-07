class Contact {
    constructor() {
        this.content = document.querySelector('.content');
    }

    get contactForm() {
        const inputDiv = (input, idName, labelText, rows=null, cols=null) => {
            const div = document.createElement('div');
            const elem = document.createElement(input);
            const label = document.createElement('label');
            elem.name = idName;
            elem.id = idName;
            elem.setAttribute('autocomplete', 'off');
            if (rows) elem.setAttribute('rows', rows);
            if (cols) elem.setAttribute('cols', cols);
            label.setAttribute('for', idName);
            label.innerText = labelText;
            div.append(label, elem);

            return div;
        };
        const form = document.createElement('form');
        const title = document.createElement('h2');
        const button = document.createElement('button');
        button.innerText = 'Submit';
        button.classList.add('submit');
        title.innerText = 'Questions?';
        form.classList.add('contact-form');
        form.append(title, inputDiv('input', 'name', 'Name'), inputDiv('textarea', 'response', 'Response', 8, 25), button);

        this.content.appendChild(form);
    }

    get contactFooter() {
        const info = () => {
            const div = document.createElement('div');
            const number = document.createElement('p');
            const address = document.createElement('p');
            const hours = document.createElement('p');
            div.classList.add('info');
            number.innerText = '123-456-7890';
            address.innerText = '123 Nostreet Ln, Whoville, TX';
            hours.innerText = 'M - Su: 7AM - 5PM'
            div.append(number, address, hours);

            return div
        };
        const icons = () => {
            const div = document.createElement('div');
            const fbIcon = document.createElement('i');
            const igIcon = document.createElement('i');
            const twtIcon = document.createElement('i');
            div.classList.add('icons');
            fbIcon.classList.add('fa', 'fa-facebook-square');
            igIcon.classList.add('fa', 'fa-instagram');
            twtIcon.classList.add('fa', 'fa-twitter');
            div.append(fbIcon, igIcon, twtIcon);

            return div;
        };
        const div = document.createElement('div');
        div.classList.add('contact-footer');
        div.append(info(), icons());

        this.content.append(div);
    }
}

const populateContact = () => {
    const contact = new Contact();
    contact.contactForm;
    contact.contactFooter;
};

export { populateContact };