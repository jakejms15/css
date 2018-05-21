function alertInput(){
    if(this.id == "1"){
        alert("Click Event");
    } else if(this.id == "4"){
        alert("Similar to click event!");      
    }      
}

function mouseMove(){
    if(this.id == "1"){
        this.style.color = "pink";
        this.value = "mouse is moving!";
    } else if (this.id == "2"){
        this.style.color = "blue";
        this.value = "mouse is over the text box!";
    }   
}

function mouseOut(){
    if(this.id == "1" || this.id == "2"){
        this.style.color = "black";
        this.value = "";
    }
}

function focusInput(){
    this.value = "this is focused!";
}

function focusOut(){
    this.value = "";
}

function checkUsername(){
    var username = this.value;
    var display = document.getElementById("display");
    
    if(username.length > 0){
        if(username.length < 5){
            display.style.color = "red";
            display.style.display = "block";
            display.innerHTML = "Your username needs to be made up of at least 5 characters!";
        } else {
            display.style.color = "black";
            display.style.display = "none";
            display.innerHTML = "";
        }
    } else {
        display.style.color = "red";
        display.style.display = "block";
        display.innerHTML = "Please fill in your username!";
    }
}

function checkPassword(){
    var password = this.value;
    var display = document.getElementById("displayp");
    display.style.color = "red";
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
    if(password.length > 0){
        if(password.length >= 6){
            if(password.match(format)){
                display.style.display = "none";
                display.innerHTML = "";
            } else {
                display.style.display = "block";
                display.innerHTML = "Your password needs to be made up of at least one special characters!";
            }
        } else {
            display.style.display = "block";
            display.innerHTML = "Your password needs to be made up of at least 6 characters!";
        }
    } else {
        display.style.display = "block";
        display.innerHTML = "Please fill in your password!";
    }
}

function clearInput() {
    if(this.id == "5"){
        var display = document.getElementById("display");
        display.style.display = "none";
        display.innerHTML = "";
    } else {
        var displayp = document.getElementById("displayp");
        displayp.style.display = "none";
        displayp.innerHTML = "";
    }
}

function verifyPassword(){
    var password = document.getElementById("6").value;
    var displaycp = document.getElementById("displaycp");
    
    if(this.value == password){
        displaycp.style.display = "block";
        displaycp.style.color = "green";
        displaycp.innerHTML = "Your password matches!";
    } else {
        displaycp.style.display = "block";
        displaycp.style.color = "red";
        displaycp.innerHTML = "Your password does not match!";
    }
}

var input = document.getElementById("1");
var input2 = document.getElementById("2");
var input3 = document.getElementById("3");
var input4 = document.getElementById("4");
var username = document.getElementById("5");
var password = document.getElementById("6");
var cpass = document.getElementById("7");

input.addEventListener('click', alertInput);

input.addEventListener('mouseover', mouseMove);
input2.addEventListener('mouseover', mouseMove);
input.addEventListener('mouseout', mouseOut);
input2.addEventListener('mouseout', mouseOut);

input3.addEventListener('focus', focusInput);
input3.addEventListener('focusout', focusOut);

input4.addEventListener('mousedown', alertInput);

username.addEventListener('focusout', checkUsername);
username.addEventListener('focus', clearInput);
password.addEventListener('focusout', checkPassword);
password.addEventListener('focus', clearInput);
cpass.addEventListener('focusout', verifyPassword);