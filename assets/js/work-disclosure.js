(() => {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

  document.querySelectorAll('details.work-disclosure').forEach((details) => {
    const summary = details.querySelector(':scope > summary.work-toggle');
    if (!summary) return;

    let timer;
    let pointerInside = false;
    let transient = false;
    let suppressHover = false;

    const cancelTimer = () => {
      window.clearTimeout(timer);
      timer = undefined;
    };
    const closeTransient = () => {
      if (transient && !pointerInside && !details.contains(document.activeElement)) {
        details.open = false;
        transient = false;
      }
    };

    details.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'touch' || !canHover.matches) return;
      pointerInside = true;
      if (details.open || suppressHover) return;
      cancelTimer();
      timer = window.setTimeout(() => {
        timer = undefined;
        if (pointerInside && canHover.matches && !suppressHover && !details.open) {
          transient = true;
          details.open = true;
        }
      }, 250);
    });

    details.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'touch') return;
      pointerInside = false;
      suppressHover = false;
      cancelTimer();
      closeTransient();
    });

    summary.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.target.closest('a, button, input, select, textarea, label')) return;
      event.preventDefault();
      cancelTimer();
      // The first activation pins a hover preview; the next activation closes it.
      if (!(details.open && transient)) details.open = !details.open;
      transient = false;
      if (!details.open) suppressHover = pointerInside;
    });

    details.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      cancelTimer();
      details.open = false;
      transient = false;
      suppressHover = pointerInside;
      summary.focus({ preventScroll: true });
    });

    details.addEventListener('focusout', () => {
      // Wait until focus has moved to its next target before closing a preview.
      window.setTimeout(closeTransient, 0);
    });
  });
})();
