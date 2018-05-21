function toFahenheit()
{
    var degrees = document.getElementById('degrees').value;
    var toFah = degrees * (9/5) + 32;
    document.getElementById('fahrenheit').value = toFah;
}

function toDegrees()
{
    var fahrenheit = document.getElementById('fahrenheit').value;
    var toDeg = (fahrenheit - 32) * 5/9;
    document.getElementById('degrees').value = toDeg;
}