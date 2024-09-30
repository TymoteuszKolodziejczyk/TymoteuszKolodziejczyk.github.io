let Item = function(name, number, image)
{
    this.name = name
    this.number = number
    this.image = image
}

function game(chosen)
{
    let win = "You lost!"
    let rand = Math.floor(Math.random() * 3)
    let rock = new Item("rock", 0, "img/rock.jpg")
    let paper = new Item("paper", 1, "img/paper.jpg")
    let scissors = new Item("scissors", 2, "img/scissors.jpg")
    let arr = [rock.image, paper.image, scissors.image]

    if(chosen == rand)
    {
        win = "Tie!"
    }
    else if(((chosen > rand) || (chosen == 0  && rand == 2)) && !(chosen == 2  && rand == 0))
    {
        win = "You won!"
    }

    var image = document.querySelector("#result")
    image.src = arr[rand]
    image.width = 200
    let wynik = document.getElementById("wynik")
    wynik.innerHTML = win + rand
}
