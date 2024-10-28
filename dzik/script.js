var pkt = 0
var liczba = 0
var validator = 0
var czas = 2000
var intervalId = 0

function los()
{
    if(validator == 1)
    {
        let wynik = document.querySelector("#wynik")
        let dobrze = document.querySelector("#dobrze")
        pkt--
        wynik.innerHTML = pkt
        dobrze.src = "img/bad.png"
    }
    validator = 1
    l = document.querySelector("#liczba")
    liczba = Math.floor(Math.random() * 100 + 1)
    l.innerHTML = liczba
}

function clicked(opcja)
{
    if(validator == 1)
    {
        let dobrze = document.querySelector("#dobrze")
        let wynik = document.querySelector("#wynik")
        let num = liczba.toString()
        if((opcja && (liczba % 7 == 0 || num.includes('7'))) || (opcja == false && liczba % 7 != 0 && num.includes('7') == false))
        {
            pkt++
            dobrze.src = "img/good.png"
        }
        else
        {
            pkt--
            dobrze.src = "img/bad.png"
        }
        wynik.innerHTML = pkt;
        validator = 0
    }
}

function time(t)
{
    czas = t*1000
}

function start()
{
    let wynik = document.querySelector("#wynik")
    pkt = 0
    wynik.innerHTML = 0
    clearInterval(intervalId);
    intervalId = setInterval(los, czas)
}
