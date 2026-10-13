(() => {
  document.querySelectorAll('details.email-disclosure').forEach((details) => {
    const summary = details.querySelector(':scope > summary.email-toggle');
    const closeButton = details.querySelector('.email-close');
    if (!summary) return;

    const close = (restoreFocus) => {
      details.open = false;
      if (restoreFocus) summary.focus({ preventScroll: true });
    };

    closeButton?.addEventListener('click', () => close(true));

    document.addEventListener('click', (event) => {
      if (details.open && !details.contains(event.target)) close(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !details.open) return;
      event.preventDefault();
      close(true);
    });
  });
})();
