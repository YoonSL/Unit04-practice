const text = function (sel, content) {
  const nodeList = document.querySelectorAll(sel);
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = content;
  }
}

const toggleClass = function (sel, className){
  const nodeList = document.querySelectorAll(sel);
  console.log(nodeList);
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.toggle(className);
  }
}

const on = function (sel, action, cb){
  document.querySelector(sel).addEventListener(action, cb);
}

const hateify = function () {
  text('.love-hate', 'hate');
}

on('.love-hate', 'mouseenter', hateify);

const loveify = function () {
  text('.love-hate', 'love');
}

on('.love-hate', 'mouseout', loveify);

