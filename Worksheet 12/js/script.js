var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('confPass');
var divUser = document.getElementById('username');
var divPass = document.getElementById('password');
var divConfPass = document.getElementById('confirmPassword');
var symbol = /[!@#$%^&*()_+=]/;

function alertFunc()
{
    alert("First Box Clicked");
}

function input1Pink()
{
    input1.style.color = "pink";
    input1.value = "mouse is moving!";
}

function input1MouseOut()
{
    input1.style.color = "black";
    input1.value = "testing 1";
}

function input2Blue()
{
    input2.style.color = "blue";
    input2.value = "mouse is over the text box!";
}

function input2MouseOut()
{
    input2.style.color = "black";
    input2.value = "testing 2";
}

function input3Focus()
{
    input3.value = "this is focused!";
}

function input3Focusout()
{
    input3.value = "";
}

function input4MouseDown()
{
    alert("similar to click event");
}

function confPassword()
{
    if(pass.value != pass2.value)
        {
            divConfPass.innerHTML = "Your passwords needs to match!";
            divConfPass.style.color = "red";
            divConfPass.style.fontWeight = "bold";
        }
    else
        {
            divConfPass.innerHTML = "Your passwords match!";
            divConfPass.style.color = "red";
            divConfPass.style.fontWeight = "bold";
        }
}

function resetError(div)
{
    div.innerHTML = "";
}

function checkInput(length1, id, tField)
{
    var id2 = false;
    id.style.color = "red";
    id.style.fontWeight = "bold";
    if(tField.value.length == 0)
        {
            id.innerHTML = "Please fill in the "+tField.name;
            id2 = true;
        }
    else if(tField.value.length < length1)
        {
            id.innerHTML = "The "+tField.name+" be made up of "+length1+" characters!";
            id2 = true;
        }
    else if(tField.value.length >= length1)
        {
            id.innerHTML = "";
            id2 = false;
        }
    return id2;
}

function checkCorrectPass()
{
    if(symbol.test(pass.value) == false)
    {
            divPass.innerHTML = "Your password needs to be made up of at least 1 special character!";
            divPass.style.color = "red";
            divPass.style.fontWeight = "bold";
    } 
}

input1.addEventListener('click', alertFunc);
input1.addEventListener('mousemove', input1Pink);
input1.addEventListener('mouseout', input1MouseOut);
input2.addEventListener('mouseover', input2Blue);
input2.addEventListener('mouseout', input2MouseOut);
input3.addEventListener('focus', input3Focus);
input3.addEventListener('focusout', input3Focusout);
input4.addEventListener('mousedown', input4MouseDown);
pass2.addEventListener('focusout', confPassword);
user.addEventListener('focusout', function(){
                              checkInput(5, divUser, user);
                      });
pass.addEventListener('focusout', function(){
                              var error = checkInput(6, divPass, pass);
                              if(error == false)
                                  {
                                      checkCorrectPass();
                                  }
                      });
user.addEventListener('focus', function(){
                              resetError(divUser);
                      });

pass.addEventListener('focus', function(){
                              resetError(divPass);
                      });
pass2.addEventListener('focus', function(){
                              resetError(divConfPass);
                      });