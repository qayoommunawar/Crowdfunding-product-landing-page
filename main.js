const menuButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');
const navIcon = document.querySelector('.btn-icon');
const aboutBtn = document.querySelectorAll('.btn-about--card');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.btn-modal--close');
const modalCards = document.querySelectorAll('.modal-card');
const cardHeader = document.querySelectorAll('.modal-card--header');
const contiueBtn = document.querySelectorAll('.btn-modal--select');
const successMessage = document.querySelector('.success-message');
const btnSuccess = document.querySelector('.btn-success-message');

// Toggle navigation menu on button click

menuButton.addEventListener('click', () =>{
    // navMenu.classList.toggle('active');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    if(!isExpanded){
        menuButton.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('active');
        navIcon.src = "images/icon-close-menu.svg";
    }else{
        menuButton.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navIcon.src = "images/icon-hamburger.svg";
    }
})


// Add event listeners to all about buttons
aboutBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        modal.classList.add('active')
        modal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
    })
})

// Close modal on close button click
modalClose.addEventListener('click', closeModal);

document.addEventListener('click', e => {
    if(e.target.hasAttribute('data-dismiss-modal')) closeModal();
});

function closeModal() {
    modal.classList.remove('active')
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  

// Add event listeners to all card headers for toggling cards

// Select and toggle modal cards (single-select) + expand/collapse .modal-select for the active card

function resetCards() {
  modalCards.forEach(card => {
    card.classList.remove('active');

    // uncheck radio (if any)
    const r = card.querySelector('input[type="radio"]');
    if (r) r.checked = false;

    // collapse .modal-select (if any)
    const sel = card.querySelector('.modal-select');
    if (sel) {
      sel.classList.remove('active', 'acitve'); // support both spellings
      sel.style.opacity = '';
      sel.style.pointerEvents = '';
      sel.style.height = '';
    }
  });
}

function selectCard(card) {
  const radio = card.querySelector('input[type="radio"]');
  if (radio?.disabled) return;

  resetCards();

  // activate this card
  card.classList.add('active');
  if (radio) radio.checked = true;

  // expand its .modal-select (if present)
  const sel = card.querySelector('.modal-select');
  if (sel) {
    sel.classList.add('active', 'acitve');       // handles your CSS typo `.acitve`
    sel.style.opacity = '1';
    sel.style.pointerEvents = 'auto';
    sel.style.height = 'auto';
  }
}

// Click anywhere on a card to select it
modalCards.forEach(card => {
  card.addEventListener('click', () => selectCard(card));

  // Also react to keyboard-selection of the radio
  const r = card.querySelector('input[type="radio"]');
  if (r) r.addEventListener('change', () => selectCard(card));
});


// Showing The Success Message
contiueBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        successMessage.classList.add('active')
        console.log('clicked')
    })
})

btnSuccess.addEventListener('click', () => {
    successMessage.classList.remove('active')
    closeModal();
});