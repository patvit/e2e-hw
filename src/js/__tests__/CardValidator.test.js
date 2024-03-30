import CardValidator from '../CardValidator';
import CardWidget from '../CardWidget';

document.body.innerHTML = `
<div class="widget-container">
  <h2>Credit Card Validator</h2>
  <div class="cards-widget"></div>
</div>
`;

const cardWidget = new CardWidget(document.querySelector('.cards-widget'));
cardWidget.bindToDOM();
const cardValidator = new CardValidator();

test.each([
  ['Visa', '4'],
  ['Mastercard', '53'],
  ['Mir', '2'],
  ['American Express', '34'],
  ['Discover', '65'],
  ['JCB', '35'],
  ['неизвестен', '77'],
])('%s card must start with %s', (expected, digits) => {
  cardValidator.checkCard(digits);
  expect(cardValidator.type).toBe(expected);
});

test('should return card type', () => {
  cardValidator.type = 'Mir';
  expect(cardValidator.showType()).toBe('Mir');
});
