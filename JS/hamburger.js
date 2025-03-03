document.addEventListener("DOMContentLoaded", function () {
    const accountBtn = document.getElementById("account-btn");
    const menu = document.getElementById("hamburger-menu");
    const closeBtn = document.getElementById("close-btn");

    accountBtn.addEventListener("click", function () {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    // ปิดเมนูเมื่อคลิกข้างนอก
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== accountBtn) {
            menu.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const accountBtn = document.getElementById("account-btn");
    const menu = document.getElementById("hamburger-menu");
    const closeBtn = document.getElementById("close-btn");

    accountBtn.addEventListener("click", function () {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    // ปิดเมนูเมื่อคลิกข้างนอก
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== accountBtn) {
            menu.classList.remove("active");
        }
    });

    // โหลดสถานะห้องจาก Local Storage
    loadRoomStatus();
});
