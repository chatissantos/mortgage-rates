import './styles/main.scss';
import 'bootstrap';
import Logo from './images/logo.png';

console.log('Welcome to Mortgage Rates');
function removeClass() {
    var el = document.querySelector(".waves");
    el.classList.remove("more");
}


setTimeout(function(){
    removeClass();
}, 7500);
