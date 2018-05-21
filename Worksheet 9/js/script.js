var arrayExample = new Array('Chasing Cars', 'Human', 'Mr. Brightside', 'Super Massive Black Hole', 'Twisted Transistor', 'Yellow', 'Seven Nation Army');
document.getElementById("arrayLength").innerHTML += arrayExample.length;

function fetch()
{
    var num = document.getElementById("num").value;
    var song = arrayExample[num];
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");


    
    if(num < 0 || num > 6)
    {  
        document.getElementById("result").innerHTML= "The item you are looking for is not in the list, kindly enter a number between 0 and 6";
        document.getElementById("result").style.color = "red";
    }
    if(num == "")
    {
        document.getElementById("result").innerHTML= "The item you are looking for is not in the list, kindly enter a number between 0 and 6";
        document.getElementById("result").style.color = "red";
    }
    
        if(zero.checked && (num >= 0 && num <=6))
        {
            document.getElementById("result").innerHTML= "Song: "+ arrayExample[num];
            document.getElementById("result").style.color = "black";
                
        }
        
        if(one.checked)
        {
            if(num > 0 && num <=6)
            {   
                document.getElementById("result").innerHTML= "Song: "+ arrayExample[num-1];
                document.getElementById("result").style.color = "black";
            }
            if (num == 0)
            {
                document.getElementById("result").innerHTML= "The item you are looking for is not in the list, kindly enter a number between 1 and 7";
                document.getElementById("result").style.color = "red";
            }
                
        }    
}

function Afunction()
{
    var musicArtist = new Array();
    musicArtist.push(document.getElementById("A1").value);
    musicArtist.push(document.getElementById("A2").value);
    musicArtist.push(document.getElementById("A3").value);
    
    document.getElementById("APara").innerHTML = "You entered the following artists: "+musicArtist.join("  and  ");
}
