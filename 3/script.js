
//ヘッダー設定

let lastScrollTop = 0; // 最後にスクロールした位置

// スクロールイベントのリスナー
window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');

    // ヘッダーが存在する場合のみ処理を実行
    if (header) {
        if (currentScroll > lastScrollTop) {
            // 下スクロール中はヘッダーを隠す
            header.style.top = "-80px"; // ヘッダーを隠す（高さは適宜調整）
        } else {
            // 上スクロール中はヘッダーを表示
            header.style.top = "0";
        }
    }

    // 現在のスクロール位置を保存
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 位置が0未満の場合は0に設定
});

// ハンバーガーメニューの設定
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// 他の場所をクリックしたときにメニューを閉じる
document.addEventListener('click', function (event) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // navMenuやhamburgerが存在する場合のみ処理を実行
    if (navMenu && hamburger) {
        // メニューもしくはハンバーガーアイコンがクリックされた場合は閉じない
        if (
            navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            navMenu.classList.remove('active');
        }
    }
});


// ヘアカタログカテゴリー
function filterGallery(category) {
    const cards = document.querySelectorAll('.catalog-card'); // 修正: 正しいクラス名に変更

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block'; // 表示
        } else {
            card.style.display = 'none'; // 非表示
        }
    });
}
