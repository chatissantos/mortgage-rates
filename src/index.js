import './styles/main.scss';
import './styles/news.scss';
import 'bootstrap';
import Logo from './images/logo.png';
import ArticlePreviewLg from './images/article-preview-lg.png';
import ArticlePreviewSm from './images/article-preview-sm.png';

console.log('Welcome to Mortgage Rates');
function removeClass() {
    var el = document.querySelector(".waves");
    el.classList.remove("more");
}


setTimeout(function(){
    removeClass();
}, 7500);
