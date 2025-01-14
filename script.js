document.querySelectorAll('.icons img').forEach(icon => {
  icon.addEventListener('click', function () {
      // アイコンの active クラス切り替え
      document.querySelectorAll('.icons img').forEach(img => img.classList.remove('active'));
      this.classList.add('active');

      // コンテンツの切り替え
      document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
      const target = this.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
  });
});