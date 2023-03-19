function downloadVideo(videoLink) {
  var url = videoLink;
  var elem = document.createElement('a');
  elem.href = url;
  elem.download = url;
  elem.id = "downloadAnchor";
  document.body.appendChild(elem);
  $('#downloadAnchor')[0].click();
}

