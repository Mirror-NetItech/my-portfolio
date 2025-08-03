
  /* Boss I can only function when there's coffee on the keyboard*/
  document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const cards = Array.from(container.querySelectorAll('.card, .vcard'));

  cards.forEach((card) => {
    const collapseBtn = card.querySelector('.collapse-btn');

    collapseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseCard(card);
    });

    card.addEventListener('click', (e) => {
      if (!card.classList.contains('expanded')) {
        expandCard(card, e);
      }
    });

    if (card.classList.contains('vcard')) {
      const video = card.querySelector('video.vid');
      const overlay = card.querySelector('.overlay');
      const icon = card.querySelector('.play-pause-icon');

      video.addEventListener('click', (e) => {
        e.stopPropagation();
        if (card.classList.contains('expanded')) { // Only toggle if expanded
          if (video.paused) {
            video.play();
            overlay.classList.add('visible');
            icon.classList.remove('play');
            icon.classList.add('pause');
          } else {
            video.pause();
            overlay.classList.remove('visible');
            icon.classList.remove('pause');
            icon.classList.add('play');
          }
        } else { // Expand the card if it's not already expanded
          expandCard(card, { target: e.target }); // Pass the target element
        }
      });
    }
  });

  function expandCard(card, options = {}) {
    card.classList.add('expanded');
  }

  function collapseCard(card) {
    card.classList.remove('expanded');
  }

  // Prevent collapsing on clicks inside the container
  container.addEventListener('click', (e) => {
    e.stopPropagation();
  });

});