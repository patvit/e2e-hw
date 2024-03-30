export default class LuhnAlgorithm {
  constructor(widget) {
    this.cardWidget = widget;
    this.input = document.querySelector('.input');
    this.form = document.getElementById('form');
    this.checkNumber = this.checkNumber.bind(this);
  }

  init() {
    this.form.addEventListener('submit', this.checkNumber);
  }

  checkNumber(e) {
    e.preventDefault();
    const { value } = this.input;

    if (value.length === 19 || (value.length >= 13 && value.length <= 16)) {
      // Контрольная цифра (последняя)
      const checkDigit = Number(value[value.length - 1]);
      // Вычисленная контрольная цифра
      const checkDigitComputed = this.сalcCheckDigit(value);

      if (checkDigitComputed === checkDigit) {
        this.cardWidget.msgStatus('correct-card');
      } else {
        this.cardWidget.msgStatus('wrong-card');
      }
    } else if (value.length === 0) {
      this.cardWidget.msgStatus('empty');
    } else {
      this.cardWidget.msgStatus('wrong-number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  сalcCheckDigit(value) {
    // Отделяем остальные цифры от контрольной; образуем массив из этих цифр;
    // переворачиваем массив; преобразуем каждый элемент массива в число
    const invertedArr = value
      .slice(0, value.length - 1)
      .split('')
      .reverse()
      .map(Number);

    // Умножаем цифры в нечетных позициях массива на 2
    invertedArr.forEach((item, idx) => {
      if (idx === 0 || idx % 2 === 0) {
        invertedArr[idx] = item * 2;
      }
    });

    // Вычитаем 9 из чисел больше 9
    invertedArr.forEach((item, idx) => {
      if (item > 9) {
        invertedArr[idx] = item - 9;
      }
    });

    // Складываем все числа в массиве
    const sum = invertedArr.reduce((acc, item) => acc + item);

    // Вычисляем контрольную цифру: 10 - (sum mod 10)
    return 10 - (sum % 10);
  }
}
