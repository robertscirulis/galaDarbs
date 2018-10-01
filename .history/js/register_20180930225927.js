function myFunction() {
    var x = document.getElementsByClassName(".psw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}