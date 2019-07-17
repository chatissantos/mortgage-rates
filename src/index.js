import './styles/main.scss';
import './styles/news-landing.scss';
import './styles/news-article.scss';
import './styles/rates.scss';
import './styles/home.scss';
import './styles/lender.scss';
import 'bootstrap';
import './images/logo.png';
import './images/article-preview-lg.png';
import './images/article-preview-sm.png';

function removeClass() {
    var el = document.querySelector(".waves");
    el.classList.remove("more");
}


setTimeout(function(){
    removeClass();
}, 7500);
