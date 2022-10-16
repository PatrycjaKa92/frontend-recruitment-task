const button = document.querySelector('.push');
const popup = document.querySelector('.popup');
const popupBackground = document.querySelector('.popup-background');
const counterElement = document.querySelector('.counter');
const reset = document.querySelector('.reset');
let counter = Number(localStorage.getItem('user') || 0);

button.addEventListener('click', function() {
    popup.classList.add('show');
    counter = counter + 1;
    localStorage.setItem('user', counter);
    if (counter < 5) {
        counterElement.innerHTML = "You have clicked <b>" + counter + " times </b>to related button.";
    } else {
        reset.classList.add('show');
        counterElement.innerHTML = "You have clicked <b>" + counter + " times </b>to related button.";
    }
})

// button.onclick =  function() {
//     popup.classList.add('show');
// }



popupBackground.addEventListener('click', function() {
    popup.classList.remove('show');
})

reset.addEventListener('click', function() {
    localStorage.removeItem('user');
    counter = 0;
    reset.classList.remove('show');
})