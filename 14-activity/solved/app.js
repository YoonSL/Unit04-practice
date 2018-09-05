const changeText = function () {
  const input = $('input').val();
  $('.love-hate').text(input);
}

const changeBtn = $('#change');

changeBtn.on('click', changeText);

