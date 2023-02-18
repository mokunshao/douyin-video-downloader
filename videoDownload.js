function download(url, name, format) {
  fetch(url).then((res) => {
    res.blob().then((blob) => {
      var a = document.createElement('a');
      var urlLink = window.URL.createObjectURL(blob);
      var filename = 'attachment;filename=' + name + '.' + format;
      a.href = urlLink;
      a.download = filename.replace('attachment;filename=', '');
      a.click();
      window.URL.revokeObjectURL(urlLink);
    });
  });
}

function main() {
  const video = document.querySelector('video');
  if (!video) {
    return;
  }

  const url = video.src;
  const suffix = new URL(url).pathname.split('.').pop();

  download(video.src, document.title, suffix);
}

main();
