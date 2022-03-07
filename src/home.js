import Logo from './logo.png';

class Home {
    constructor() {
        this.content = document.querySelector('.content');
    }

    logo(cssClass) {
        const myLogo = new Image();
        myLogo.src = Logo;
        myLogo.classList.add(cssClass);
        
        return myLogo;
    }

    main() {
        const addTitle = () => {
            const title = document.createElement('h1');
            title.classList.add('home-title');
            title.innerText = 'Good Eats';

            return title
        };
        const main = document.createElement('div');
        main.classList.add('main');
        main.append(addTitle(), this.logo('home-logo'));
        this.content.appendChild(main);
    }

    footer() {
        const footer = document.createElement('p');
        footer.classList.add('home-footer');
        footer.innerText = 'Good Eats is a meal prep service based in the Whooville area. \
                                    We value commuity and fresh food, so that\'s why we want \
                                    YOU to choose US as your go-to meal prep service!!';
        this.content.appendChild(footer);
    }
};


const populateHome = () => {
    const homePage = new Home();
    homePage.main();
    homePage.footer();
};

export { Home, populateHome };
