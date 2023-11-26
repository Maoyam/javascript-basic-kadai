// btnというidを持つボタンのHTMLを取得し定数に代入する
const changeBtn = document.getElementById('btn');

// textというidを持つh2のHTMLを取得し定数に代入する
const changeText = document.getElementById('text');

// クリックをするとテキスト変更処理を実行する
changeBtn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました'
});