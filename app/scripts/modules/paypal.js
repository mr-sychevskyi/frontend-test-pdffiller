const desktopBreakpoint = window.matchMedia('(min-width: 1024px)');

paypal.Buttons({
  style: {
    layout: 'horizontal',
    color: 'blue',
    height: desktopBreakpoint.matches ? 52 : 40,
    tagline: false
  }
}).render('.paypal-button-container');
