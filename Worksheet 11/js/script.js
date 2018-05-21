var txt = document.getElementById('text');
var box = document.getElementById('box');
function textover()
{
    document.getElementById('text').innerHTML = "Click Me!"
}

function textout()
{
    document.getElementById('text').innerHTML = "My Block"
}

function clickColor()
{
    document.getElementById('text').style.backgroundColor = "red"
}

txt.addEventListener('mouseover', textover);
txt.addEventListener('mouseout', textout);
box.addEventListener('click', clickColor);
