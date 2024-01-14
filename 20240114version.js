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

function getVideoName() {
  return document.querySelector('[data-e2e=related-video]').childNodes[0].querySelector('span').textContent + ' - ' + document.title;
}

function main() {
  const sources = document.querySelector('video').querySelectorAll('source');
  const url = sources[sources.length - 1].src;
  console.log('url: ', url);
  const name = getVideoName();
  console.log('name: ', name);
  download(url, name, 'mp4');
}

