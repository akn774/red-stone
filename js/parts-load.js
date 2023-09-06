// header用HTMLファイルの読み込み・表示
fetch ('./header.html')
  .then (response => {
    if (response.ok) {
      return response.text ();
    } else {
      throw new Error (`リクエスト失敗:${response.status} ${response.statusText}`);
    }
  })
  .then (responseHtml => {
    // 文字列からHTMLに変換
    const parser = new DOMParser ();
    const loadedHeader = parser.parseFromString (responseHtml, 'text/html');

    // 取得したヘッダー等を対象部分に差し込む
    const header = document.querySelector ('header');
    header.innerHTML = loadedHeader.body.innerHTML;
  })
  .catch (error => {
    console.error ('エラー:', error);
  });

// footer用HTMLファイルの読み込み・表示
fetch ('./footer.html')
  .then (response => {
    if (response.ok) {
      return response.text ();
    } else {
      throw new Error (`リクエスト失敗:${response.status} ${response.statusText}`);
    }
  })
  .then (responseHtml => {
    // 文字列からHTMLに変換
    const parser = new DOMParser ();
    const loadedFooter = parser.parseFromString (responseHtml, 'text/html');

    // 取得したヘッダー等を対象部分に差し込む
    const footer = document.querySelector ('footer');
    footer.innerHTML = loadedFooter.body.innerHTML;
  })
  .catch (error => {
    console.error ('エラー:', error);
  });
