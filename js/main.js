fetch ('./data/character.json')
  // .then (response => response.json ())
  .then (response => {
    //ステータスが ok であればレスポンスを JSON として解析
    if (response.ok) {
      return response.json ();
    } else {
      //ステータスが ok でなければエラーにする
      throw new Error (`リクエスト失敗:${response.status} ${response.statusText}`);
    }
  })
  .then (characters => {
    //出力する HTML 文字列を入れる変数
    let html = '';

    //キャラクターごとの JSON データを処理（users は JSON の配列）
    characters.forEach ((character, index) => {
      //キャラクターごとの div 要素の HTML
      const characterDiv = `
      <a href="./sub.html?No=${index}">
        <div class="character">
          <div class="job-wrapper">
            <div>
              <img src="./image/${character.image}" alt="">
            </div>
            <div>
              <div>
                <p class="job-title">職業</p>
                <p class="job">${character.job}</p>
              </div>
              <div>
                <p class="awakening-title">覚醒タイプ</p>
                <p class="awakening">${character.awakening}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    `;

      //キャラクターごとの div 要素の HTML を変数 html に追加
      html += characterDiv;
    });

    //出力先の要素を取得
    const container = document.querySelector ('.character-list');
    //出力先の要素に作成した html を挿入
    container.innerHTML = html;
  })
  .catch (error => {
    console.error ('エラー:', error);
  });
