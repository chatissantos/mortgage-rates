import './styles/main.scss';
import 'bootstrap';

console.log('Welcome to Mortgage Rates');
function removeClass() {
    var el = document.querySelector(".waves");
    el.classList.remove("more");
}


setTimeout(function(){
    removeClass();
}, 7500);
