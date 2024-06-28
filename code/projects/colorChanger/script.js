//select all Buttons

const buttons = document.querySelectorAll('.colors');



//select body
const body = document.querySelector("body");
buttons.forEach(function (button) {

    button.addEventListener('click', function (e) {

        //change the color 
        if (e.target.id) {
            body.style.backgroundColor = e.target.id;
        }

    });

});


