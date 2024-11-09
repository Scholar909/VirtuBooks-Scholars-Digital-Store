document.addEventListener('DOMContentLoaded', function(){
    const overlay = document.getElementById('overlay');
    const okButton = document.getElementById('okButton');

   const isPopupShown = localStorage.getItem('popupShown');


    okButton.addEventListener('click', function(){
        overlay.style.display = 'none';

        localStorage.setItem('popupShown', 'true');
    });
});

const menuBtn = document.querySelector('.menu');
const options = document.querySelector('#options');

menuBtn.addEventListener('click', function(){
    options.classList.toggle('active');
});
