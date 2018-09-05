const hateify = function () {
  text('.love-hate', 'hate');
}

const loveify = function () {
  text('.love-hate', 'love');
}

on('.love-hate', 'mouseenter', hateify);

on('.love-hate', 'mouseout', loveify);