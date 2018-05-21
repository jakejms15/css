var fName = document.getElementById("fName");
var locality = document.getElementById("locality");
var telephone = document.getElementById("telephone");
var divName = document.getElementById("divName");
var divLocality = document.getElementById("divLocality");
var divTele = document.getElementById("divTele");
var locations = ["Msida", "Pieta", "Marsa"];


function validation()
{
    if(this.name == "fName")
        {
            if(this.value.length == 0)
                {
                    divName.innerHTML = "Should not be empty!";
                    divName.style.color = "red";
                }
            else if(this.value.length >= 3)
                {
                    divName.innerHTML = "";
                }
            else if(this.value.length < 3)
                {
                    divName.innerHTML = "Name should have atleast 3 characters";
                    divName.style.color = "red";
                }
        }
    else if(this.name == "locality")
        {
            if(locations.indexOf(this.value) > -1)
            {
                divLocality.innerHTML = "Location Exists";
                divLocality.style.color = "red";
            }
            else if(this.value.length == 0)
                {
                    divLocality.innerHTML = "Should not be empty!";
                    divLocality.style.color = "red";
                }
            else
            {
                divLocality.innerHTML = "Location doesn't Exist";
                divLocality.style.color = "red";
            }
        }
     else if(this.name == "phone")
    {
        if(this.value.length == 0)
        {
            divTele.innerHTML = "Should not be empty!";
            divTele.style.color = "red";
        }  
        else if(this.value.length > 8 || this.value.length < 8)
        {
            divTele.innerHTML = "Phone should have 8 Numbers";
            divTele.style.color = "red";
        }      
        else if(this.value.length = 8)
        {
            divTele.innerHTML = "Good Phone Number";
            divTele.style.color = "red";
        }
    }
}

fName.addEventListener('focusout', validation);
locality.addEventListener('focusout', validation);
telephone.addEventListener('focusout', validation);