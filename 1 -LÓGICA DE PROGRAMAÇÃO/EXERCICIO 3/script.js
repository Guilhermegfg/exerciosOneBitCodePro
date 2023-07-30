let metros = parseFloat(prompt("Digite um valor em metros para ser convertido: "))
let medida = prompt(`milímetro (mm)\ncentímetro (cm)\ndecímetro (dm)\ndecâmetro (dam)\nhectômetro (hm)\nquilômetro (km)`)


switch(medida) {
    case "mm":
        let mm = metros * 1000
        alert(`${mm}`)
        break
    case "cm":
        let cm = metros * 100
        alert(`${cm}`)
        break
    case "dm":
        let dm = metros * 10
        alert(`${dm}`)
        break
    case "dam":
        let dam = metros / 10
        alert(`${dam}`)
        break 
    case "hm":
        let hm = metros / 100
        alert(`${hm}`)
        break
    case "km": 
        let km = metros / 1000
        alert(`${km}`)
        break 
    default: 
        alert("Você fez alguma coisa de errado")
}