import {
    input,
    ButtonType,
    img
} from '../dom/elements.js';

export function troca() {

    ButtonType.addEventListener('click', () => {

        

        if (input.type === 'password') {
            input.type = 'text';
            img.src = '../images/hide.png';
        } else {
            input.type = 'password';
            img.src = '../images/view.png';
        }

    });

}