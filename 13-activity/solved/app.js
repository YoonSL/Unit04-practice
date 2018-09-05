const hateify = function () {
  $('.love-hate').text('hate');
}

const changeBtn = $('#change');

changeBtn.on('click', hateify);

