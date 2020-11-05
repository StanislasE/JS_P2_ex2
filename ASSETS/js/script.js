document.getElementById('dataEntry').onkeyup = press;

function press() {
    var result = document.getElementById('dataEntry').value;
    alert('Vous avez taper sur : ' + result);
}
