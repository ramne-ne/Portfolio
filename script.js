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