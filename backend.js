function showText() {
    var value = document.getElementById("value").value;
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + value + "&amp;size=100x100"
    qrimage.removeAttribute("hidden")
}