fetch ('./red-stone/data/character.json')
  .then (response => response.json ())
  .then (result => {
    // 受け取ったJSONを元に、HTMLオブジェクトを生成し、htmlファイルに追加する。
    result => addHtmlFromJson (result);
  })
  .catch (error => {
    console.error ('エラー:', error);
  });

//jsonデータを引数に受け取ってDOM操作を行う関数を作成
const addHtmlFromJson = jsonObj => {
  const json = jsonObj;

  // HTMLを出力する
  Object.values (json).forEach (json => {
    // テンプレートリテラル
    let character_html = `
        <div class="character">
            <div class="job-wrapper">
                <div>
                    <img src="./image/icon04.jpg" alt="">
                </div>
                <div>
                    <p class="job-title">職業</p>
                    <p class="job">${json.job}</p>
                </div>
                <div>
                    <p class="awakening-title">覚醒タイプ</p>
                    <p class="awakening">${json.awakening}</p>
                </div>
            </div>
            <div class="equipment">
                <p class="weapon">${json.equipment.weapon}</p>
                <p class="sub_weapon">${json.equipment.sub_weapon}</p>
                <p class="neck">${json.equipment.neck}</p>
                <p class="head">${json.equipment.head}</p>
                <p class="earrings">${json.equipment.earrings}</p>
                <p class="belt">${json.equipment.belt}</p>
                <p class="glove">${json.equipment.glove}</p>
                <p class="armor">${json.equipment.armor}</p>
                <p class="feet">${json.equipment.feet}</p>
                <p class="ring">${json.equipment.ring}</p>
            </div>
        </div>
     `;

    // 「.character-list」に出力
    document
      .querySelector ('.character-list')
      .insertAdjacentHTML ('afterend', character_html);
  });
};
