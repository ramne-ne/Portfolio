
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}`;
}

// 初期表示と1分ごとの更新
setInterval(updateClock, 60000); // 更新間隔を1分に設定
updateClock();





// アイコン押下時の画面切り替え
        document.querySelectorAll('.icons img').forEach(icon => {
          icon.addEventListener('click', function () {
              // アイコンのactiveクラスを切り替え
              document.querySelectorAll('.icons img').forEach(img => img.classList.remove('active'));
              this.classList.add('active');

              // 表示するswipe-itemを切り替え
              const targetId = this.getAttribute('data-target');
              document.querySelectorAll('.swipe-item').forEach(item => item.classList.remove('active'));
              document.getElementById(targetId).classList.add('active');
          });
      });

      