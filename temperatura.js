const celsius = document.getElementById("celsius")
const fh = document.getElementById("fh")
const kelvin = document.getElementById("kelvin")
const botao = document.getElementById("botao")
const v = document.getElementById("div")

botao.addEventListener("click", () => {
    if(celsius || kelvin) {
        const r = celsius + 273
        const v = r

    }else if(kelvin || fh) {
        const r = kelvin - 273
        const v = r
    }
})

