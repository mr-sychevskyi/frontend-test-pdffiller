$(document).ready(function () {
  const form = $('.form-payment');
  const formElements = form.find('.form-group__element');
  const formSubmit = form.find('button[type="submit"]');

  form.parsley().on();

  // form.parsley().on('form:error', function (formInstance, res) {
  //   console.log(formInstance);
  //   var ok = $('.parsley-error');
  //   console.log(res);
  //
  //   const formElements = form.find('.form-group__element');

    // $sections.each(function(index, section) {
    //   $(section).find(':input').attr('data-parsley-group', 'block-' + index);
    // });
    //   console.log('Validation failed for: ', this.$element);
  //   this.$element.attr('data-parsley-ui-enabled', false);
  // });


  // formElements.first().parsley()
  // form.parsley()
  //   .on('form:validate', function () {
  //     $.each(formElements, function (index, element) {
  //       window.Parsley.on('field:error', function () {
  //         console.log('Validation failed for: ', this.$element);
  //         // data-parsley-ui-enabled="false"
  //         return false;
  //       });
  //     });
  //   });

  // form.parsley({
  //   errorsContainer(field) {
  //     return field.$element.closest('label')
  //   }
  // })
  //   .on('form:validated', function (formInstance) {
  //     var ok = formInstance.isValid();
  //
  //    console.log(ok);

  // if (!data.validationResult) {
  //     $.each(formElements, function (index, element) {
  //
  //       const instance = $(this).parsley();
  //       const isValid = instance.validate();
  //
  //       console.log($(this));
  //
  //       if (isValid !== true) return false;
  //     });
  // }
  // });

  // const validate = activeTextArea => {
  //   $.each(formElements, function (index, element) {
  //     if (activeTextArea && activeTextArea !== element) return;
  //
  //     const instance = $(this).parsley();
  //     const isValid = instance.validate();
  //
  //     if (isValid !== true) return false;
  //   });
  // };

  // formSubmit.on('submit', function (e) {
  //   // e.preventDefault();
  //   validate();
  // });
  //
  // $.each(formElements, function () {
  //   $(this).on('keydown', function (e) {
  //   if (e.key === 'Tab') {
  //     const instance = $(this).parsley();
  //     instance.validate();
  //   }
  //
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //
  //     const activeTextarea = document.activeElement;
  //     validate(activeTextarea);
  //   }
  //   });
  // });
});
