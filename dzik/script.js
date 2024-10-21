var pkt = 0;

function los()
{
    var liczba = document.querySelector("#liczba")
    liczba.innerHTML = Math.floor(Math.random() * 100 + 1)
}

function clicked(opcja)
{
    var wynik = document.querySelector("#wynik")
    let num = los.toString()
    if((opcja && (los % 7 == 0 || num.includes("7"))) || (!opcja && (los % 7 != 0 || !num.includes("7"))))
    {
        pkt++
    }
    else
    {
        pkt--
    }
    los()
    wynik.innerHTML = pkt;
}

setInterval(los, 5000)
