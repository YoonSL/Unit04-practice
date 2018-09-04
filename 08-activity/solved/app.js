const text = function (sel, content) {
  const nodeList = document.querySelectorAll(sel);
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = content;
  }
}

text('.available', 'item in store');
text('.soldout', 'unavailable');
text('#hot-item', 'only 2 left!');
text('h1', 'Welcome to the Online Store');


