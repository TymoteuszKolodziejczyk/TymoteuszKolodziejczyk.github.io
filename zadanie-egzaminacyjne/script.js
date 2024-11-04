function color(c){document.getElementById("blok-prawy").style.backgroundColor = c}
function czcionka(c){document.getElementById("blok-prawy").style.color = c}
function rozmiar(c){document.getElementById("blok-prawy").style.fontSize = c}
function listt(c){document.getElementById("lista").style.listStyleType = c}
function ramka()
{
    var img = document.getElementById("gib")
    if(document.getElementById("ramka").checked)
    {
        img.style.border = "1px solid white"
    }
    else
    {
        img.style.borderWidth = "0px"
    }
}
