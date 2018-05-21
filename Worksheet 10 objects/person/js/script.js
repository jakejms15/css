var fNV = document.getElementById('fName').value;
var eV = document.getElementById('email').value;
var aV = document.getElementById('age').value;
var iV = document.getElementById('id').value;
var personArray = [];

function person(fName, email, age, id)
{
    this.fName = fName;
    this.email = email;
    this.age = 0;
    this.id = 0;
    
}

function add()
{
    var Person(personArray.length+1) = new person(fNV, eV, aV, iV);
}

var button = document.getElementById("button") ;
    button.addEventListener('click', function(){ add();});