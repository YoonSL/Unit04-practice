const hateify = function () {
  const input = $('input');
  const value = input.val();
  $('.love-hate').text(value);
  input.val('');
}

const changeBtn = $('#change');

changeBtn.on('click', hateify);

