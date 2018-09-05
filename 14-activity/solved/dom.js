const $ = function (sel) {
  const nodeList = document.querySelectorAll(sel);

  const text = function (content) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].textContent = content;
    }
  }

  const toggleClass = function (className) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }

  const on = function (action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  }

  const val = function () {
      return nodeList[0].value;    
  }


  const publicAPI = {
    text: text,
    toggleClass: toggleClass,
    on: on,
    val: val
  }

  return publicAPI;



}
