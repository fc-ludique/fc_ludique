document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    const toggleButton = document.querySelector('.page-header__toggle');
    const nav = document.querySelector('.page-header__nav');
    const links = document.querySelectorAll('.page-header__link');

    // 1. ハンバーガーボタンをクリックしたときの動作
    toggleButton.addEventListener('click', () => {
        // メニューの開閉状態を切り替え (クラスを付け外し)
        nav.classList.toggle('is-active');
        toggleButton.classList.toggle('is-active');
    });

    // 2. メニュー内のリンクをクリックしたときの動作（メニューを閉じる）
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-active');
            toggleButton.classList.remove('is-active');
        });
    });
});