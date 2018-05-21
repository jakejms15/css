var word = "Many of life's failures are people who did not realize how close they were to success when they gave up.";
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var time = date.getTime();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

function onload()
{
    var word1 = document.getElementById('word').innerHTML += word;   
    document.getElementById('DMY').innerHTML += "Day: "+day+" Month: "+monthName()+" Year: "+year;
    document.getElementById('timeMilli').innerHTML += "(Number of milliseconds since 1970/01/01) "+time;
    document.getElementById('date1').innerHTML += day+"/"+month+"/"+year+", "+hour+":"+minute+":"+second;
    document.getElementById('date2').innerHTML += day+"/"+month+"/"+year;
    document.getElementById('time1').innerHTML += hour+":"+minute+":"+second;
    document.getElementById('time2').innerHTML += hour+":"+minute;
}

function getPos()
{
    var word2 = document.getElementById('enter').value;
    var final = word.indexOf(word2);
    
    document.getElementById('final').innerHTML = final;
}

function monthName()
{
     switch(month+1)
            {
            case 1: month = "January";
            break;
             case 2: month = "February";
            break;
             case 3: month = "March";
            break;
             case 4: month = "April";
            break;
             case 5: month = "May";
            break;
             case 6: month = "June";
            break;
             case 7: month = "July";
            break;
             case 8: month = "August";
            break;
             case 9: month = "September";
            break;
             case 10: month = "October";
            break;
             case 11: month = "November";
            break;
             case 12: month = "December";
            break;
             
           
    }
     return month;
}