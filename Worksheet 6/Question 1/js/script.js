var num1 = parseInt(prompt("Enter the first Number please"));
var num2 = parseInt(prompt("Enter the second Number please"));

function add()
{
   var ans = num1 + num2; 
   document.getElementById('add').innerHTML += "   "+ans;
}

function sub()
{
   var ans = num1 - num2; 
   document.getElementById('sub').innerHTML += "   "+ans;
}

function times()
{
   var ans = num1 * num2; 
   document.getElementById('times').innerHTML += "   "+ans;
}

function div()
{
   var ans = num1 / num2; 
   document.getElementById('div').innerHTML += "   "+ans;
}

function power()
{
   var ans = Math.pow(num1, num2); 
   document.getElementById('power').innerHTML += "   "+ans;
}

function mod()
{
   var ans = num1 % num2; 
   document.getElementById('mod').innerHTML += "   "+ans;
}

function area()
{
   var ans = num1 * num2; 
   document.getElementById('area').innerHTML += "   "+ans;
}

function sqr()
{
   var ans = (num1 + num2)*2; 
   document.getElementById('sqr').innerHTML += "   "+ans;
}
