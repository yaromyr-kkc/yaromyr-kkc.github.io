var code = 'alert("Hello world!")'
function checkCode(value){
    if (value == code){
        location.href = ""
    }
    else {
        alert("Dat is de code niet.")
    }
}