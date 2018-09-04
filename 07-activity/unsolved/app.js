const availableList = document.querySelectorAll('.available');
const soldoutList = document.querySelectorAll('.soldout');
document.getElementById('hot-item').textContent = "only 2 left!";
document.querySelector('h1').textContent = "Welcome to the Online Store";

for (let i = 0; i < availableList.length; i++) {
    availableList[i].textContent = "item in store";
}

for (let i = 0; i < soldoutList.length; i++) {
    soldoutList[i].textContent = "unavailable";
}