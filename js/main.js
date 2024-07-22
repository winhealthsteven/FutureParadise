document.addEventListener('DOMContentLoaded', function () {
    const navPills = document.querySelector('.nav-pills');
    const triangleIndicator = document.querySelector('.triangle-indicator');

    function positionTriangle(activeTab) {
        const tabRect = activeTab.getBoundingClientRect();
        const navRect = navPills.getBoundingClientRect();
        triangleIndicator.style.left = `${tabRect.left - navRect.left + (tabRect.width / 2) - (triangleIndicator.offsetWidth / 2)}px`;
    }

    // 初始位置
    positionTriangle(document.querySelector('.nav-link.active'));

    // 監聽頁籤切換事件
    navPills.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-link')) {
            setTimeout(() => positionTriangle(e.target), 10); // 短暫延遲確保類已更新
        }
    });

    // 窗口調整時重新定位
    window.addEventListener('resize', function () {
        positionTriangle(document.querySelector('.nav-link.active'));
    });
});