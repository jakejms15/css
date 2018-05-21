function Car(make, model, year, colour, started) {

    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.started = started;

    this.Start = function () {
        alert("Car on!");

        this.started = true;
    };

    this.Drive = function () {
        alert("Car is moving");
    };

    this.Brake = function () {
        alert("Car is braking");
    };

    this.Stop = function () {

        if (this.started != false) {
            this.started = false;
        } else {
            alert("You need to start the car first!");
        }
    };
}

var car1 = new Car('Fiat', 'Cinquecento', 2017, 'White', false);

document.getElementById("make").innerHTML = car1.make;
document.getElementById("model").innerHTML = car1.model;
document.getElementById("year").innerHTML = car1.colour;
document.getElementById("colour").innerHTML = car1.year;

var cStart = document.getElementById("start");
var cDrive = document.getElementById("drive");
var cBrake = document.getElementById("brake");
var cStop = document.getElementById("stop");

cStart.addEventListener('click', function () {
    car1.Start();
});
cDrive.addEventListener('click', car1.Drive);
cBrake.addEventListener('click', car1.Brake);
cStop.addEventListener('click', function () {
    car1.Stop();
});

var Persons = [];

function Person(fname, email, age, id) {

    this.fname = fname;
    this.email = email;
    this.age = age;
    this.id = id;
}

function checkId(id){
    return Persons.some(function(element){
        return element.id === id;
    });
}

function addPerson() {
    
    var pName = document.getElementById("name").value;
    var pEmail = document.getElementById("email").value;
    var pAge = document.getElementById("age").value;
    var pId = document.getElementById("id").value;
    
    var rDisplay = document.getElementById("rDisplay");
    rDisplay.innerHTML = "";
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("id").value = "";
    
    if(pName.length == 0 || pEmail.length == 0 || pAge.length == 0 || pId.length == 0){
        alert("All fields need to be filled!");
    } else {
        var person = new Person(pName, pEmail, pAge, pId);
        
        var idCheck = checkId(person.id);
        
        if(idCheck != true) {
            Persons.push(person);
        } else {
            alert("A person with your ID has already registered with us.");
        }
    }
    
    Persons.forEach(function(p, index){
        rDisplay.innerHTML += "Person: " + (index + 1) +
                              "<br>Full Name: " + p.fname +
                              "<br>Email: " + p.email +
                              "<br>Age: " + p.age +
                              "<br>ID: " + p.id + "<br><br>";
    });
}

var pSubmit = document.getElementById("submit");

pSubmit.addEventListener('click', addPerson);