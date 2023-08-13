fetch ('./data/character.json')
  .then (response => response.json ())
  .then (result => {
    // 装備アイテムを表示するための要素を、配列で取得する
    // equipment_list = document.querySelector ('.equipment').childNodes;

    body = document.querySelector ('body');
    body.insertAdjacentElement ('afterbegin', result);

    // 各要素に値を突っ込む
    // element.insertAdjacentElement('afterbegin', image);
  })
  .catch (error => {
    console.error ('エラー:', error);
  });
