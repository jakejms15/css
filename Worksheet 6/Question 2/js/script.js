var num = parseFloat(prompt("Enter a number"));

function firstThing()
{
    document.getElementById('numEntered').innerHTML += num;
}

function Int1()
{
    var parseInt1 = parseInt(num);
    document.getElementById('Int1').innerHTML = parseInt1;
}

function ceil()
{
    var parseInt2 = Math.ceil(num);
    document.getElementById('ceil').innerHTML = parseInt2;
}


function floor()
{
    var parseInt3 = Math.floor(num);
    document.getElementById('floor').innerHTML = parseInt3;
}


function round()
{
    var parseInt4 = Math.round(num);
    document.getElementById('round').innerHTML = parseInt4;
}