const spanUsername = document.querySelector('.showusername');
const logOutBtn = document.querySelector('.logout');
const userLabel = document.querySelector('.user-data');
const myprofile = document.querySelector('.myprofile')

const userArr = JSON.parse(localStorage.getItem("users"))

if (localStorage.getItem('ID')) {
    let userIndex = localStorage.getItem('ID');
    spanUsername.innerText = userArr[userIndex].username;
} else {
    mainPageReset();
}

logOutBtn.addEventListener('click', function () {
    mainPageReset();
    localStorage.removeItem('ID');
});

function mainPageReset() {
    logOutBtn.classList.add('d-none');
    spanUsername.classList.add('d-none');
}
