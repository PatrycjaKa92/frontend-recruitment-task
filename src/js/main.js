const button = document.querySelector('.push');
const popup = document.querySelector('.popup');
const popupBackground = document.querySelector('.popup-background');
const counterElement = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', function() {
    popup.classList.add('show');
    counter = counter + 1;
    counterElement.innerHTML = "You have clicked " + counter + " times to related button.";
})

// button.onclick =  function() {
//     popup.classList.add('show');
// }

popupBackground.addEventListener('click', function() {
    popup.classList.remove('show');
})