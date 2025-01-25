
//スクロール時にセクションがフェードインする
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


// スクロール時に年表アイテムがビューに入ったらアニメーションを適用
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            item.classList.add('active'); // スクロールで表示されたアイテムにactiveクラスを追加
        }
    });
});


// 商品紹介の背景切り替え
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const items = Array.from(document.querySelectorAll('.item'));
    const itemWidth = items[0].offsetWidth; // 各アイテムの幅
    let currentIndex = 1; // 初期の中央アイテムインデックス（2番目のアイテム）

    function updateCenterItem() {// active クラスを更新
        items.forEach((item, index) => {
          if (index === currentIndex) { 
            item.classList.add('center'); // 中央のアイテムにスタイルを付与
          } else {
            item.classList.remove('center'); // その他のアイテムからスタイルを削除
          }
        });
      }

    // アイテムを右端に複製して無限に追加する
    function appendItems() {
      const firstItem = carousel.firstElementChild; // 最初のアイテムを取得
      const clone = firstItem.cloneNode(true); // 最初のアイテムを複製
      carousel.appendChild(clone); // 複製したアイテムを右端に追加
    }

    function slideCarousel() {// カルーセルをスライドさせる
        currentIndex++;
        if (currentIndex >= items.length) {
          // 無限ループのため、アイテムを右側に追加
          const firstItem = items.shift(); // 先頭のアイテムを削除
          carousel.appendChild(firstItem); // 先頭のアイテムを末尾に追加
          items.push(firstItem); // items配列も更新
          currentIndex--; // インデックスを調整
        }

        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

      // 中央アイテムを更新
        setTimeout(() => {
            updateCenterItem();
        }, 500); // スライド完了後にクラス更新
    

        // 初期状態のactiveクラス設定
        updateCenterItem();


      // スライドが終わったら無限ループを実現
      setTimeout(() => {
        // 最初のアイテムを複製して右端に追加
        appendItems();

        // トランジションを無効にして位置をリセット
        carousel.style.transition = 'none';
        currentIndex--; // インデックスを1つ戻す
        carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

        // 最初のアイテムを削除（削除しないと無限に増える）
        carousel.removeChild(carousel.firstElementChild);
      }, 500); // トランジション時間に合わせる
    }

    // 一定間隔でスライド
    setInterval(slideCarousel, 3000);// 3秒ごとにスライド
  });