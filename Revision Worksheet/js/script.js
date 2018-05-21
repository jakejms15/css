var imgArray = ["js/images/bmw1.JPG", "js/images/bmw2.jpg", "js/images/bmw3.jpg"];
var image = document.getElementById("image");
image.src = imgArray[0];

function changeImage()
{
    var i = imgArray.indexOf(this.getAttribute("src"));
    
    if(i < (imgArray.length-1))
        {
            i++;
            this.src = imgArray[i];
        }
    else
        {
            this.src = imgArray[0];
        }
}

image.addEventListener('click', changeImage);

