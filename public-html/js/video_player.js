var videoElement = document.getElementById("video_player");

/* Why this javascript code is needed?
Safari browser is capable of playing HLS video directly.
Other browsers as Chrome no, so we'll use hls.js in these cases.
*/

if ( !(videoElement.canPlayType('application/vnd.apple.mpegurl') === "probably") &&
   + !(videoElement.canPlayType('application/vnd.apple.mpegurl') === "maybe") &&
   + Hls.isSupported()){

  var hls = new Hls();
  hls.attachMedia(videoElement);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    hls.loadSource("/video/stream.m3u8");
  });
  hls.on(Hls.Events.MANIFEST_PARSED,playVideo);

}