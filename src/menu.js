import Thighs from './grilledthighs.jpg';
import Salad from './pastasalad.jpg';
import Rice from './shrimpfriedrice.jpg';
import Spaghetti from './turkeyspaghetti.jpg';
import Tacos from './turkeytacos.jpg';

class Menu {
    constructor() {
        this.content = document.querySelector('.content');
    }

    createFoodImg(item) {
        const food = new Image();
        food.src = item;
        food.classList.add('food-img');

        return food;
    }

    items() {
        const createItemCard = (foodTitle, foodDescription, foodImg) => {
            const card = document.createElement('div');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            title.innerText = foodTitle;
            description.innerText = foodDescription;
            card.classList.add('item');
            card.append(title, this.createFoodImg(foodImg), description);

            return card;
        }
        const container = document.createElement('div');
        container.classList.add('items-container');
        container.appendChild(createItemCard('Grilled Chicken Thighs', 'Grilled chicken thighs \
                                                    served with corn on the cob and baby potatoes', Thighs));
        container.appendChild(createItemCard('Pasta Salad', 'Lemon herb pasta salad with chickpeas, \
                                                    cherry tomatoes, and diced avocado', Salad));
        container.appendChild(createItemCard('Shrimp Fried Rice', 'Wok-tossed fried rice with shrimp, \
                                                     eggs, and vegetables', Rice));
        container.appendChild(createItemCard('Turkey Spaghetti', 'Spaghetti and turkey meat sauce \
                                                    sprinkled with fresh parmesan', Spaghetti));
        container.appendChild(createItemCard('Turkey Tacos', 'Flour tortilla tacos filled with ground turkey, \
                                                    shredded cheese, and lettuce with side servings of rice \
                                                    and refried beans', Tacos));
        this.content.appendChild(container);
    }
};

const populateMenu = () => {
    const menu = new Menu();
    menu.items();
};

export { populateMenu };