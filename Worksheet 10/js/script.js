var itemArray = ["Banana", "Cereal", "Eggs", "Milk", "Potatoes"];
var number = prompt("Enter 1 for alphabetical order, or -1 for reverse order");

function items()
{
    if(number == 1)
        {
            itemArray.sort();
            for(var i in itemArray)
                {
                    document.getElementById("itemHolder").innerHTML += itemArray[i] + "<br/>";
                }
        }
    else if(number == -1)
        {
            itemArray.sort();
            itemArray.reverse();
            for(var i = 0; i <itemArray.length; i++)
                {
                    document.getElementById("itemHolder").innerHTML += itemArray[i] + "<br/>";
                }
        }
    else
        {
            document.getElementById("itemHolder").innerHTML = "That is not a valid input.";
        }
}

function Searching()
{
    var word = document.getElementById("element").value;
    var found = false;
    if(word !="")
    {
        var letter1 = word.substring(0, 1);
        var restWord = word.substring(1, word.length);
        var Upper = letter1.toUpperCase();
        var restWordLower = restWord.toLowerCase();
        var together = Upper + restWordLower;
        
    }
    var indexArray = itemArray.indexOf(together);
    document.getElementById("elementAns").innerHTML = together + " was found at "+indexArray;
 
}