import './style.css';
import Logo from './logo.png';
import { populateHome } from './home';
import { populateMenu } from './menu';
import { populateContact } from './contact';

class Nav {
    constructor() {
        this.content = document.querySelector('.content');
    }

    logo(cssClass) {
        const myLogo = new Image();
        myLogo.src = Logo;
        myLogo.classList.add(cssClass);
        
        return myLogo;
    }

    navbar() {
        const createLinks = (links, ul) => {
            links.forEach(link => {
                const li = document.createElement('li');
                li.innerText = link.toUpperCase();
                ul.appendChild(li);
            });
        };
        const nav = document.createElement('div');
        const ul = document.createElement('ul');
        const links = ['home', 'menu', 'contact'];
        createLinks(links, ul);
        nav.append(this.logo('nav-logo'), ul);
        nav.classList.add('nav');
        this.content.appendChild(nav);
        const activeTab = underlineTab('HOME');
        activeTab.underline();
    }
};

const underlineTab = (tabName) => {
    const tabs = document.querySelectorAll('.nav li');
    const getTab = () => {
        for (let tab of tabs) {
            if (tab.innerText == tabName) {
                return tab;
            }
        }
    };
    const removeUnderline = () => {
        for (let tab of tabs) {
            tab.classList.remove('underline');
        }
    };
    const underline = () => {
        const tab = getTab();
        removeUnderline();
        tab.classList.add('underline');
    };

    return { underline };
};

const loadTab = () => {
    const removeContent = () => {
        const content = document.querySelector('.content');
        const children = document.querySelectorAll('.content > *:nth-child(n + 2)')
        for (let child of children) {
            content.removeChild(child);
        }
    };
    const addTabEL = (tab) => {
        if (tab.innerText == 'MENU') {
            removeContent();
            populateMenu();
        } else if (tab.innerText == 'HOME') {
            removeContent();
            populateHome();
        } else {
            removeContent();
            populateContact();
        }
    }
    const tabs = document.querySelectorAll('.nav li');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        const activeTab = underlineTab(tab.innerText);
        addTabEL(tab);
        activeTab.underline();
    }));
};

const nav = new Nav();
nav.navbar();
populateHome();
loadTab();
