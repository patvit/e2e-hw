import CardWidget from './CardWidget';
import LuhnAlgorithm from './LuhnAlgoritm';

const cardWidget = new CardWidget(document.querySelector('.cards-widget'));
cardWidget.bindToDOM();

const luhnAlgorithm = new LuhnAlgorithm(cardWidget);
luhnAlgorithm.init();
