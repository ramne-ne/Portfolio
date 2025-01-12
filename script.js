const items = document.querySelectorAll('.swipe-item');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

// 最初のアイテムを表示
items[currentIndex].classList.add('active');

//次への処理がいらなくなる　常に表示したいから
//ボタンの表示、非表示の設定
function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === items.length - 1;
}

//次への処理がいらなくなる　常に表示したいから
function showItem(index) {
  // indexが範囲外の場合は戻す
  if (index < 0 || index >= items.length) return;


  // 現在のアイテムを非表示にする
  items[currentIndex].classList.remove('active');//items[currentIndex]はid="item1"参照
  //items[currentIndex].classListはクラス名を参照

  console.log("items[currentIndex]",items[currentIndex]);
  console.log("items[currentIndex].classList",items[currentIndex].classList);

  
  // 新しいアイテムを表示
  currentIndex = index;
  items[currentIndex].classList.add('active');

  updateButtons();
}

//次への処理がいらなくなる　常に表示したいから
prevButton.addEventListener('click', () => {
  showItem(currentIndex - 1);
});

// 次へボタンを押したときの処理
nextButton.addEventListener('click', () => {
  showItem(currentIndex + 1);//currentIndexはアイテムのページ数
});

// 初期状態でボタンの状態を設定
updateButtons();