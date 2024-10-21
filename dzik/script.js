function trzepac() {
    let liczba = Math.floor(Math.random() * 100 + 1);
    let liczbaH = document.querySelector("#liczba");
    liczbaH.innerHTML = liczba;
}

let myInterval = setInterval(trzepac, Number(prompt("Podaj szybkość gry w sekundach!")) * 1000);

