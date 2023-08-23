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
    //URLパラメータから、当該キャラクターの番号を取得する
    let url = new URL (window.location.href);
    const urlParam = url.searchParams.get ('No');

    //JSONから、当該キャラクターのデータを取得する
    character = characters[urlParam];

    // htmlを生成
    const characterDiv = `
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
      <div class="equipments">
        <div class="equipment"><p class="weapon-key">武器</p><p class="weapon">${character.equipment.weapon}</p></div>
        <div class="equipment"><p class="sub-weapon-key">補助武器</p><p class="sub-weapon">${character.equipment.sub_weapon}</p></div>
        <div class="equipment"><p class="neck-key">首</p><p class="neck">${character.equipment.neck}</p></div>
        <div class="equipment"><p class="head-key">頭</p><p class="head">${character.equipment.head}</p></div>
        <div class="equipment"><p class="earrings-key">耳</p><p class="earrings">${character.equipment.earrings}</p></div>
        <div class="equipment"><p class="belt-key">腰</p><p class="belt">${character.equipment.belt}</p></div>
        <div class="equipment"><p class="glove-key">手</p><p class="glove">${character.equipment.glove}</p></div>
        <div class="equipment"><p class="armor-key">鎧</p><p class="armor">${character.equipment.armor}</p></div>
        <div class="equipment"><p class="feet-key">足</p><p class="feet">${character.equipment.feet}</p></div>
        <div class="equipment"><p class="ring-key">指</p><p class="ring">${character.equipment.ring}</p></div>
    </div>
    `;

    //キャラクターごとの div 要素の HTML を変数 html に追加
    let html = characterDiv;

    //出力先の要素を取得
    const container = document.querySelector ('.character-eqequipment');
    //出力先の要素に作成した html を挿入
    container.innerHTML = html;
  })
  .catch (error => {
    console.error ('エラー:', error);
  });
