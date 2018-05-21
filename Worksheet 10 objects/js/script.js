function Car(make, model, year, color, started)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.started = false;

    this.Start = function()
    {
        this.started = true;
        alert("Car Started");
    };
    this.Drive = function()
    {
        if(this.started != true)
            {
                alert("You need to start the car first!");
            }
        else
            {
                alert("Car is on");
            }
    };
    this.Brake = function()
    {
        alert("Braking");
    };
    this.Stop = function()
    {
        this.started = false;
        alert("Car Stopped");
    };
        
}
var car1 = new Car("Fiat", "Cinquecento", "2017", "white", false);

    var carStart = document.getElementById("start") ;
    carStart.addEventListener('click', function(){ car1.Start();});
    
    var carDrive = document.getElementById("drive") ;
    carDrive.addEventListener('click', function(){ car1.Drive()});
    
    var carBrake = document.getElementById("brake") ;
    carBrake.addEventListener('click', car1.Brake);
    
    var carStop = document.getElementById("stop") ;
    carStop.addEventListener('click', car1.Stop);


document.getElementById("make").innerHTML += car1.make;
document.getElementById("model").innerHTML += car1.model;
document.getElementById("year").innerHTML += car1.year;
document.getElementById("color").innerHTML += car1.color;