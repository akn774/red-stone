fetch ('./data/character.json')
  .then (response => response.json ())
  .then (data => {
    console.log ('JSONファイルの内容:');
    console.log (data);
  })
  .catch (error => {
    console.error ('エラー:', error);
  });
