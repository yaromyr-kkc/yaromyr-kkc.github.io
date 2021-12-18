var code = "alert('Hello world!')"
function checkCode(value){
    if (value == code){
        location.href = "/secret/rooms/secret_room.html"
    }
    else {
        alert("Dat is de code niet.")
    }
}