// window.onload=function(){
  // var vid = document.getElementsByTagName('video')[0];
  // console.log("VIDEO - ", vid);

  // vid.addEventListener('pause', function () {
  //   alert("VIDEO PAUSED");
  // });

  // vid.addEventListener('play', function () {
  //   alert("VIDEO PLAY");
  // });

  // vid.addEventListener('volumechange', function () {
  //   alert("VIDEO VOL CHANGE");
  // });

  // vid.addEventListener('seeking', function () {
  //   alert("VIDEO SEEKING");
  // });

  // vid.addEventListener('seeked', function () {
  //   alert("VIDEO SEEKED");
  // });

  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = chrome.extension.getURL('helloVid.js');

  // // Then bind the event to the callback function.
  // // There are several events for cross browser compatibility.
  // script.onreadystatechange = callback;
  // script.onload = callback;

  // Fire the loading
  head.appendChild(script);
// };