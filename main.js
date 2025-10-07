const menuButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');
const navIcon = document.querySelector('.btn-icon');
const aboutBtn = document.querySelectorAll('.btn-about--card');
const modal = document.querySelector('.modal');
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
        console.log('clicked')
    })
})