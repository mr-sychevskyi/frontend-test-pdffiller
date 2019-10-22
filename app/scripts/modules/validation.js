$(document).ready(function () {
  const form = $('.form-payment');
  const formElements = form.find('.form-group__element');

  const hideErrorTooltips = () => formElements.removeClass('show-error');
  const hideErrors = () => $(formElements).each((i, field) => $(field).parsley().reset());

  const hideErrorsOnClickOutside = e => {
    const target = e.target;

    if (!target.classList.contains('form-group__label') && !target.classList.contains('form-group__element')) {
      hideErrors();
    }
  };

  const validateField = el => {
    const field = $(el);
    field.parsley().validate();
    hideErrorTooltips();
    field.addClass('show-error')
  };

  $(formElements).each((i, field) => {
    const currentField = $(field);

    currentField.keydown(e => {
      if (e.keyCode === 9) {
        validateField(currentField);
      }

      if (e.keyCode === 13) {
        e.preventDefault();
        validateField(currentField);
      }
    });
  });

  form.on('submit', e => {
    e.preventDefault();
    let isErrors = false;

    $(formElements).each((i, field) => {
      const isFieldValid = $(field).parsley().isValid();

      validateField(field);

      if (!isFieldValid) {
        isErrors = true;
        return false
      }
    });

    if (!isErrors) {
      formSubmit();
    }
  });

  document.addEventListener('click', hideErrorsOnClickOutside);

  const formSubmit = () => {
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form.serialize(),

      success: function (data) {
        console.log('Successful!');
        console.log(data);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
      complete: function (data) {
        formElements.val('');
      }
    });
  }
});
