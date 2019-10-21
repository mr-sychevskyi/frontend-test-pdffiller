const btnCvv = document.querySelector('.btn-cvv');
const cvvTooltip = document.querySelector('.cvv-tooltip');

const toggleCvvTooltip = () => {
  cvvTooltip.classList.contains('is-hidden')
    ? document.addEventListener('click', hideOnClickOutside)
    : document.removeEventListener('click', hideOnClickOutside);

  cvvTooltip.classList.toggle('is-hidden');
};

const hideOnClickOutside = e => {
  const target = e.target;

  if (!btnCvv.contains(target) && !target.closest('.cvv-tooltip')) {
    cvvTooltip.classList.add('is-hidden');
    document.removeEventListener('click', hideOnClickOutside);
  }
};

btnCvv.addEventListener('click', toggleCvvTooltip, false);
