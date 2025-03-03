document.addEventListener("DOMContentLoaded", function () {
    let rooms = JSON.parse(localStorage.getItem("rooms")) || {};

    function updateRoomStatus(roomId) {
        let statusSpan = document.getElementById(`room-${roomId}-status`);
        let bookBtn = document.querySelector(`button[onclick="bookRoom(${roomId})"]`);

        if (rooms[roomId]) {
            statusSpan.textContent = "จองแล้ว ✅";
            bookBtn.textContent = "จองแล้ว";
            bookBtn.disabled = true;
        } else {
            statusSpan.textContent = "ว่าง";
        }
    }

    window.bookRoom = function (roomId) {
        rooms[roomId] = true;
        localStorage.setItem("rooms", JSON.stringify(rooms));
        updateRoomStatus(roomId);
    };

    Object.keys(rooms).forEach(roomId => updateRoomStatus(roomId));
});
