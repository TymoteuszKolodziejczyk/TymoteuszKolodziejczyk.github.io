var pkt = 0
const poziom = parseInt(localStorage.getItem("poziom")) || 10
let gameActive = true
const nacisniete = {}

class Gracz {
    constructor(element) {
        this.element = element
        this.position = { x: 200, y: 200 }
        this.speed = 5
        this.updatePosition()
        this.addEventListeners()
    }

    updatePosition() {
        this.element.style.left = this.position.x + "px"
        this.element.style.top = this.position.y + "px"
    }

    move() {
        if (!gameActive) return

        if (nacisniete["ArrowUp"] && this.position.y > 0) {
            this.position.y -= this.speed
        }
        if (nacisniete["ArrowDown"] && this.position.y < window.innerHeight - 50) {
            this.position.y += this.speed
        }
        if (nacisniete["ArrowLeft"] && this.position.x > 0) {
            this.position.x -= this.speed
        }
        if (nacisniete["ArrowRight"] && this.position.x < window.innerWidth - 50) {
            this.position.x += this.speed
        }
        this.updatePosition()
    }

    addEventListeners() {
        window.addEventListener("keydown", (event) => {
            nacisniete[event.key] = true
        })

        window.addEventListener("keyup", (event) => {
            nacisniete[event.key] = false
        })
    }

    checkCollision(przeciwnik) {
        const element1 = this.element.getBoundingClientRect()
        const element2 = przeciwnik.element.getBoundingClientRect()

        return !(
            element1.top > element2.bottom ||
            element1.bottom < element2.top ||
            element1.left > element2.right ||
            element1.right < element2.left
        )
    }
}

class Przeciwnik {
    constructor(element) {
        this.element = element
        this.position = { x: Math.random() * (window.innerWidth - 50), y: Math.random() * (window.innerHeight - 50) }
        this.speed = poziom
        this.direction = { x: 1, y: 1 }
        this.updatePosition()
        this.move()
    }

    updatePosition() {
        this.element.style.left = this.position.x + 'px'
        this.element.style.top = this.position.y + 'px'
    }

    move() {
        setInterval(() => {
            if (!gameActive) return

            this.position.x += this.speed * this.direction.x
            this.position.y += this.speed * this.direction.y

            if (this.position.x <= 0 || this.position.x >= window.innerWidth - 50) {
                this.direction.x *= -1
            }
            if (this.position.y <= 0 || this.position.y >= window.innerHeight - 50) {
                this.direction.y *= -1
            }

            this.updatePosition()
        }, 1000 / 60)
    }
}

const graczElement = document.getElementById("dino")
const gracz = new Gracz(graczElement)
const przeciwnicy = []

const stworzprzeciwnika = () => {
    if (!gameActive) return

    const przeciwnikElement = document.createElement("div")
    przeciwnikElement.className = "obj"
    document.body.appendChild(przeciwnikElement)
    const przeciwnik = new Przeciwnik(przeciwnikElement)
    przeciwnicy.push(przeciwnik)
    pkt++
    document.getElementById("pkt").textContent = "Punkty: " + pkt 
}

setInterval(stworzprzeciwnika, 3000)

setInterval(() => {
    if (!gameActive) return

    przeciwnicy.forEach(przeciwnik => {
        if (gracz.checkCollision(przeciwnik)) {
            gameActive = false
            document.getElementById("scoreF").textContent = "Twoje punkty: " + pkt
            document.getElementById("gameOver").style.display = "flex"
        }
    })
}, 100)

setInterval(() => {
    gracz.move()
}, 1000 / 60)

document.getElementById("powrot").addEventListener("click", function() {
    window.location.href = "index.html"
})