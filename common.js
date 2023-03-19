function getDownloadMsg() {
  const datas = window['SSR_RENDER_DATA'];
  let target;
  for (const key in datas) {
    if (Object.hasOwnProperty.call(datas, key)) {
      const data = datas[key];
      if (typeof data === 'object' && data['aweme']) {
        target = data;
        break;
      }
    }
  }
  if (target) {
    const url = target['aweme']['detail']['video']['bitRateList'][0]['playApi'];
    const format =
      target['aweme']['detail']['video']['bitRateList'][0]['videoFormat'];
    const author = target['aweme']['detail']['authorInfo']['nickname'];
    const title = target['aweme']['detail']['desc'];
    if (url) {
      return { url, author, title, format };
    }
  }
}

function download(url, author, title, format) {
  fetch(url).then((res) => {
    res.blob().then((blob) => {
      var a = document.createElement('a');
      var urlLink = window.URL.createObjectURL(blob);
      var filename =
        'attachment;filename=' + author + '_' + title + '.' + format;
      a.href = urlLink;
      a.download = filename.replace('attachment;filename=', '');
      a.click();
      window.URL.revokeObjectURL(urlLink);
    });
  });
}

function main() {
  const msg = getDownloadMsg();
  if (msg) {
    const { url, author, title, format } = msg;
    download(url, author, title, format);
  }
}

main();
