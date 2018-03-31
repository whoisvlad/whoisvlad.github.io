/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(255, 255, 255, 0.1)',
    lineColor: 'rgba(255, 255, 255, 0.2)',
    directionY: 'up',
    maxSpeedY: 0.6,
    directionX: 'right',
    // parallax: false,
    maxSpeedX: 0.6,
    particleRadius: 15,
    density: 15000,
    proximity: 100,
    parallaxMultiplier: 25,
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/