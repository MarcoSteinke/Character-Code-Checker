const DEFAULT_TEXT = "You typed: ";

document.addEventListener("keypress", function(event) {
    document.getElementById("code-display").innerHTML = event.keyCode;
    document.getElementById("key-display").innerHTML = DEFAULT_TEXT + String.fromCharCode(event.keyCode);
});

document.onresize = function() {
    document.querySelector("body")[0].style.paddingTop = "25%";
}