var puntky = 0;
var pedal = 0;
var punktyH = document.querySelector("#punkty");

function zwieranie(liczbbbb, digitabel) {
    if (liczbbbb == digitabel) {
        return true;
    }
    while (liczbbbb != 0) {
        if (liczbbbb % 10 == digitabel) {
            return true;
        }
        liczbbbb = Math.floor(liczbbbb / 10);
    }
    return false;
}

function trzepac() {
    if(pedal){
        puntky--;
    }punktyH.innerHTML = puntky;
    var liczba = Math.floor(Math.random() * 100 + 1);
    let liczbaH = document.querySelector("#liczba");
    liczbaH.innerHTML = liczba;
    pedal = 0;
}

function clicked(opcja) {
    pedal = 1;
    if(opcja){
        if(liczba%7==0 || zwieranie(liczba, 7)){
            puntky++;
        }else{
            puntky--;
        }
    }else{
        if(liczba%7!=0 && !zwieranie(liczba, 7)){
            puntky++;
        }else{
            puntky--;
        }
    }
}

let myInterval = setInterval(trzepac, Number(prompt("Podaj szybkość gry w sekundach!")) * 1000);

