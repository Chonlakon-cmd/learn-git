document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("completeButton").addEventListener("click", function() {
        let popup = document.getElementById("successPopup");
        popup.classList.add("show");

        setTimeout(function() {
            popup.classList.remove("show");
            window.location.href="./homeaccount.html";
        }, 3000); // ซ่อนแจ้งเตือนหลัง 3 วินาที
    });
});
