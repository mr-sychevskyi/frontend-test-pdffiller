const cleave = new Cleave('.card-input', {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    if (type) {
      const cardsList = [...document.querySelectorAll('.icons-list__item .svg')];
      const isCardMatched = cardsList.some(icon => icon.classList.contains(`icon-${type}`));

      isCardMatched
        ? cardsList.forEach(icon => icon.classList.add('is-blur'))
        : cardsList.forEach(icon => icon.classList.remove('is-blur'));

      cardsList.forEach(icon => {
        icon.classList.contains(`icon-${type}`)
          ? icon.classList.add('is-active')
          : icon.classList.remove('is-active');
      })
    }
  }
});
