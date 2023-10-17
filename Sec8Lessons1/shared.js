var backdrop = document.querySelector('.backdrop');
var selectButtons = document.querySelectorAll('.plan .button');
var modal = document.querySelector('.modal');
var nobutton = document.querySelector('.modal__action--negative')

console.dir(nobutton);

for (var i = 0; i < selectButtons.length; i++) {
    selectButtons[i].addEventListener('click', () => {
        console.log(backdrop.style.display);
        if (backdrop.style.display === 'none' || backdrop.style.display === '') {
            backdrop.style.display = 'block';
            modal.style.display = 'block';
        }
        else
            backdrop.style.display = 'none';
    })
}

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});

nobutton.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});

// var noButtonClicked = () => {
//     console.log("No clicked");
// }
