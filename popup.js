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

  //Appending cast buttons:
  // <button class="startcast" type="button" id="yui_3_11_0_1_1393545448446_2783">Start Cast</button>
  // <button class="stopcast" type="button" id="yui_3_11_0_1_1393545448446_2783">Stop Cast</button>
  var btnAttach = document.getElementsByClassName('stage-channel-header')[0];
  
  var startBtn = document.createElement('button');
  var stopBtn = document.createElement('button');

  startBtn.innerHTML = "Start Cast";
  stopBtn.innerHTML = "Stop Cast";

  startBtn.id = "startcast";
  stopBtn.id = "stopcast";

  startBtn.type = "button";
  stopBtn.type = "button";

  btnAttach.appendChild(startBtn);
  btnAttach.appendChild(stopBtn);
 // For your app to implement the features of Google Cast, it needs to know the 
 // location of the Google Cast Chrome Sender API library. All pages of your 
 // app must refer to the libary as follows:
 // <script type="text/javascript" src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"></script>
  var head = document.getElementsByTagName('head')[0];
  var castLib = document.createElement('script');
  castLib.type = 'text/javascript';
  castLib.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";
  // Fire the loading
  head.appendChild(castLib);

// NOW ADDING OUR CUSTOM SCRIPT
// Adding the script tag to the head as suggested before
  var castScript = document.createElement('script');
  castScript.type = 'text/javascript';
  castScript.src = chrome.extension.getURL('cast.js');
  // // Then bind the event to the callback function.
  // // There are several events for cross browser compatibility.
  // script.onreadystatechange = callback;
  // script.onload = callback;
  head.appendChild(castScript);
// };