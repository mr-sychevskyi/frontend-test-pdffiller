const cleave = new Cleave('.card-input', {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    if (type) {
      const cardsList = document.querySelectorAll('.icons-list .svg');

      [...cardsList].forEach(icon => {
        icon.classList.contains(`icon-${type}`)
          ? icon.classList.add('is-active')
          : icon.classList.remove('is-active');
      })
    }
  }
});
