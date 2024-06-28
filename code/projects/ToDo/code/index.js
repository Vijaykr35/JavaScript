

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");

const randomColor = function () {
    const hex = ['#7F27FF', '#9F70FD', '#FDBF60', '#FF8911'];
    const randomIndex = Math.ceil(Math.random() * 4 - 1);
    return hex[randomIndex];
};

const addButon = document.querySelector("#addButton").addEventListener('click', (e) => {
    let myTask = inputBox.value;
    if (myTask === '') {
        console.log("Invalid input!")
    }
    else {
        let Li = document.createElement('li');
        Li.innerHTML = myTask;
        Li.style.backgroundColor = randomColor();
        listContainer.appendChild(Li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        Li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
})

//Deleting the to-do

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentNode.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTodo() {

    listContainer.innerHTML = localStorage.getItem("data");
}
showTodo();
