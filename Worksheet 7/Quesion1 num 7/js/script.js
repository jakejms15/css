var name = prompt("Please enter your name");

function hello()
{
    if(name == "")
    {
        alert("Hello Valued Customer");
    }
    else
    {
        alert("Hello "+name);
    }
}

function checkBtn()
{
    var char = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    var x = document.getElementById('passphrase').value;
    if(x.match(char))
    {
        alert("Your passphrase contains invalid characters");
    }
    else
    {
        alert("Your passphrase contains valid characters");
    }
}