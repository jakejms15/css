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

function checkInput(inputLength, pId, userInput) {
    var error = false;
    
    if(userInput.value.length > 0){
        if(userInput.value.length > inputLength){
            pId.style.color = "black";
            pId.style.display = "none";
            pId.innerHTML = "";
            error = false;
        } else {
            pId.style.color = "red";
            pId.style.display = "block";
            pId.innerHTML = "Your " + userInput.name + " needs to be made up of at least " + inputLength + " characters!";
            error = true;
        }        
    } else {
        pId.style.color = "red";
        pId.style.display = "block";
        pId.innerHTML = "Please fill in your " + userInput.name + "!";
        error = true;
    }
    
    return error;
}

function checkCorrectPass(password) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
    if(password.value.match(format)){
        displayp.style.color = "black";
        displayp.style.display = "none";
        displayp.innerHTML = "";
    } else {
        displayp.style.color = "red";
        displayp.style.display = "block";
        displayp.innerHTML = "Your password needs to be made up of at least one special characters!";
    }
}

var input = document.getElementById("1");
var input2 = document.getElementById("2");
var input3 = document.getElementById("3");
var input4 = document.getElementById("4");
var username = document.getElementById("5");
var password = document.getElementById("6");
var cpass = document.getElementById("7");
var display = document.getElementById("display");
var displayp = document.getElementById("displayp");

input.addEventListener('click', alertInput);

input.addEventListener('mouseover', mouseMove);
input2.addEventListener('mouseover', mouseMove);
input.addEventListener('mouseout', mouseOut);
input2.addEventListener('mouseout', mouseOut);

input3.addEventListener('focus', focusInput);
input3.addEventListener('focusout', focusOut);

input4.addEventListener('mousedown', alertInput);

username.addEventListener('focusout', function() {
    checkInput(5, display, this)});
username.addEventListener('focus', clearInput);

password.addEventListener('focusout', function() {
        var checkError = checkInput(5, displayp, this);
        if(checkError == false){
            checkCorrectPass(this);
        }});
password.addEventListener('focus', clearInput);
cpass.addEventListener('focusout', verifyPassword);