export default class CardValidator {
  constructor() {
    this.cards = document.querySelectorAll('.card');
    this.checkCard = this.checkCard.bind(this);
  }

  showType() {
    return this.type;
  }

  checkCard(value) {
    this.cards.forEach((item) => item.classList.add('hide'));
    this.type = null;

    // для Visa
    if (value.startsWith('4')) {
      this.highlightCard('visa');
      this.type = 'Visa';
      return;
    }

    // для Mastercard
    if (value.startsWith('5') && value[1] > 0 && value[1] < 6) {
      this.highlightCard('mastercard');
      this.type = 'Mastercard';
      return;
    }

    // для Mir
    if (value.startsWith('2')) {
      this.highlightCard('mir');
      this.type = 'Mir';
      return;
    }

    // для American Express
    if (value.startsWith('34') || value.startsWith('37')) {
      this.highlightCard('amex');
      this.type = 'American Express';
      return;
    }

    // для Discover
    if (value.startsWith('65') || value.startsWith('6011')) {
      this.highlightCard('discover');
      this.type = 'Discover';
      return;
    }

    // для JCB
    if (value.startsWith('35')) {
      this.highlightCard('jcb');
      this.type = 'JCB';
      return;
    }

    if (this.type === null) {
      [...this.cards].forEach((item) => item.classList.remove('hide'));
      this.type = 'неизвестен';
    }
  }

  highlightCard(type) {
    [...this.cards]
      .find((item) => item.classList.contains(type))
      .classList.remove('hide');
  }
}
