document.getElementById('hot-item').textContent = "only 2 left!";

const availableList = document.querySelectorAll('.available');
console.log('availableList', availableList);

for (let i = 0; i < availableList.length; i++){
  availableList[i].textContent = "item in store";
}

document.querySelector('h1').textContent = "Welcome to the Online Store";

const soldoutList = document.querySelectorAll('.soldout');

for (let i = 0; i < soldoutList.length; i++){
  soldoutList[i].textContent = "unavailable";
}

