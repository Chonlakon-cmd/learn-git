document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const textarea = document.querySelector(".textarea");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.getElementById("close-modal");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

        if (textarea.value.trim() !== "") {
            modalText.innerText = "✅ ส่งแล้ว!";
            modal.style.display = "flex";
            textarea.value = ""; // ล้างข้อความใน textarea
        } else {
            modalText.innerText = "⚠️ กรุณากรอกข้อมูลก่อนส่ง!";
            modal.style.display = "flex";
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
