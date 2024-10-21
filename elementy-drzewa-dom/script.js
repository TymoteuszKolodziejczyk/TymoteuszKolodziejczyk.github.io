function interests()
{
    let zainteresowania = new Array();
    document.write("<ol>");
    for (let i = 0; i < 5; i++)
    {
        zainteresowania[i] = prompt("Podaj swoje " + (i+1) + " zainteresowanie");
        document.write("<li>" + zainteresowania[i]  + "</li>");
    }
    document.write("</ol>");
}

function dodajOpinie() 
{
    var opinion = document.getElementById("tekst").value;
    var opinie = document.getElementById("opinie");
    var newOpinion = document.createElement("p");
    newOpinion.className = "newOpinion";
    newOpinion.innerText = opinion;
    opinie.insertBefore(newOpinion, opinie.firstChild);
}

var headingEl = document.getElementById("heading"); 
headingEl.innerHTML = "All about cats"; 

var nameEls = document.getElementsByTagName("span"); 
console.log(nameEls) ; 
for (var i = 0; i < nameEls.length; i++)
    nameEls[i].innerHTML = "cat";

var nameEls = document.getElementsByClassName("animal"); 
console.log(nameEls); 
console.log(nameEls[0]); 
for (var i = 0; i < nameEls.length; i++)
    nameEls[i].innerHTML = "cat";  
 
var nameEls = document.querySelectorAll("p .animal"); 
console.log(nameEls); 
console.log(nameEls[0]); 

for(var i = 0; i < nameEls.length; i++)
    nameEls[i].innerHTML = "cat"; 

var headingEl = document.querySelector("#heading"); 
headingEl.innerHTML = "All about cats"; 

var imageEls = document.getElementsByTagName("img"); 
let imgs = ["https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?rs=1&pid=ImgDetMain"]
for(var i = 0; i < imageEls.length; i++) 
    imageEls[i].src = imgs[i];

var headingEl = document.querySelector("#heading"); 
headingEl.style.color = "orange"; 
headingEl.style.backgroundColor = "black"; 
headingEl.style.textAlign = "center"; 
var linkEls = document.querySelectorAll("a[href*=\"Dog\"]"); 
for(var i = 0; i < linkEls.length; i++)
    linkEls[i].href = "http://en.wikipedia.org/wiki/Cat";

 var headingEl = document.querySelector("#heading"); 
headingEl.className = "catcolors";

interests()

$("h1").fadeOut(3000) 
$("h1").delay(5000)
$("h1").css("color", "red")
$("h1").fadeIn(2000)