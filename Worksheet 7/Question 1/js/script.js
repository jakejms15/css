function changeColor(f)
{
    if(f.style.backgroundColor == "red")
        {
           f.style.backgroundColor = "white"; 
        }
    else
    {
        f.style.backgroundColor = "red";
    }
}
var counter = 0;
function hideShow() 
{
    var x = document.getElementById("list");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('btn').innerHTML = "Hide!";
    } else {
        x.style.display = "none";
        document.getElementById('btn').innerHTML = "Show!";
    }
    
    counter++;
    document.getElementById('clickCount').innerHTML = counter;
    if(counter>15)
        {
            document.getElementById('statement').innerHTML = "Now you have reached my limit! Stop clicking on the Show/Hide Button!";
        }
    else if(counter>5)
        {
            document.getElementById('statement').innerHTML = "You seem to like this button!";
        }
}

