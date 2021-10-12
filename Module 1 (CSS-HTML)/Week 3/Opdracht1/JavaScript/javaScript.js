function checkpassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if (passwordText == "code") {
        return true;
    }
    alert("incorrect password")
    return false;
    var data = document.getElementById("data1")
    return console.log(data)
}

console.log("wachtwoord is: 'code'")