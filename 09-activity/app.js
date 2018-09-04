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

const slytherify = function () {
  toggleClass('.available', 'slytherindent');
}

text('.available', 'item in store');
text('.soldout', 'unavailable');
text('#hot-item', 'only 2 left!');
text('h1', 'Welcome to the Online Store');



on('h1', 'click', slytherify );


