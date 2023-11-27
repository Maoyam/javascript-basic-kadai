// ボタンのHTML要素を定数に代入する
const cngBtn = document.getElementById('btn');

// 変化させる文字列のHTMLを取得する
const cngText = document.getElementById('text');

// クリックで文字列を2秒後に書き換える
cngBtn.addEventListener('click', setTimeout(() => {
  cngText.textContent = 'ボタンをクリックしました'}, 2000)
);