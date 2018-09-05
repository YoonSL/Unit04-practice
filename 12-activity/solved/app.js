const hateify = function () {
  $('.love-hate').text('hate');
}

const loveify = function () {
  $('.love-hate').text('love');
}

const loveHate = $('.love-hate');

loveHate.on('mouseenter', hateify);

loveHate.on('mouseout', loveify);