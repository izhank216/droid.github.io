$(document).ready(function() {
  const video = document.getElementById('camera-video');
  const overlay = $('#overlay');
  const camButtons = $('.camera-buttons button');
  let currentCam = 1;

  // simulate multiple camera feeds
  const camFeeds = {
    1: 'https://picsum.photos/640/360?random=1',
    2: 'https://picsum.photos/640/360?random=2',
    3: 'https://picsum.photos/640/360?random=3',
    4: 'https://picsum.photos/640/360?random=4',
    5: 'https://picsum.photos/640/360?random=5',
    6: 'https://picsum.photos/640/360?random=6',
    7: 'https://picsum.photos/640/360?random=7',
    8: 'https://picsum.photos/640/360?random=8',
    9: 'https://picsum.photos/640/360?random=9'
  };

  // set initial feed
  $('#camera-feed').css('background-image', `url(${camFeeds[currentCam]})`);
  $('#camera-feed').css('background-size', 'cover');

  // number buttons switch cameras
  camButtons.on('click', function() {
    currentCam = $(this).data('cam');
    $('#camera-feed').css('background-image', `url(${camFeeds[currentCam]})`);
  });

  // night vision toggle
  $('#toggle-night').on('click', function() {
    $('#camera-feed').toggleClass('filter brightness-150 contrast-150 grayscale');
  });

  // exit camera
  $('#close-camera').on('click', function() {
    window.location.href = '../index.html';
  });

  // optional: flicker effect for more realism
  function flickerEffect() {
    $('#camera-feed').toggleClass('flicker');
    setTimeout(flickerEffect, Math.random() * 300 + 100); // random flicker interval
  }
  flickerEffect();

});
