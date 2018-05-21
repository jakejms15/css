var s1 = "99 bottles of beer on the wall, 99 bottles of beer.";
var s2 = "There are many people who are taking the bottles off the walls.";
var s3 = "3.50 Eur is the price of each beer.";
var s4 = "There are 26 bottles left on the wall. Those bottles are from 3 different types of brands."

function onload()
{
    var prmt = prompt('Please enter your name');
    var prmt2 = prompt('Please enter your user ID');
    var parseID = parseInt(prmt2);
    alert("Yout user ID is "+prmt2+" and the type of the data is "+typeof parseID);
    var name = "Welcome to our page, "+prmt+"("+prmt2+")!";
    document.getElementById('title').innerHTML= name;
    document.getElementById('string1').innerHTML+= s1;
    document.getElementById('string2').innerHTML+= s2;
    document.getElementById('string3').innerHTML+= s3;
    document.getElementById('string4').innerHTML+= s4;
}

function String1()
{
    var parseInt1 = parseInt(s1);
    document.getElementById('s1toint').innerHTML = parseInt1;
}

function String2()
{
    var parseInt2 = parseInt(s2);
    document.getElementById('s2toint').innerHTML = parseInt2;
}

function String3()
{
    var parseInt3 = parseInt(s3);
    document.getElementById('s3toint').innerHTML = parseInt3;
}

function String4()
{
    var parseInt3 = parseFloat(s3);
    document.getElementById('s3tofloat').innerHTML = parseInt3;
}

function String5()
{
    var parseInt4 = parseInt(s4);
    document.getElementById('s4toint').innerHTML = parseInt4;
}

