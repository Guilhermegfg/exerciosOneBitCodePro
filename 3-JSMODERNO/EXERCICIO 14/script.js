const mediaAritmetica = (...numbers) => {
    let soma = numbers.reduce((cont, num) => cont + num, 0)
    let quantidade = numbers.reduce((contador) => contador + 1, 0)
    let media = soma / quantidade
    return media
}

const mediaPonderada = (...numbers) => {

    let total = numbers.map((person) => person.p * person.n)
    let somas = total.reduce((contador, num) => contador + num, 0)

    let soma = numbers.map((person) => person.p)
    let peso = soma.reduce((contador, num) => contador + num, 0)

    return somas / peso
}

const mediana = (...numbers) => {
    let numeros = numbers.slice().sort()
    console.log(numeros)
    if (numeros.length % 2 == 0){

       let termo = numeros.length / 2
       let num = numeros.slice(termo - 1, termo + 1)


       let soma = num.reduce((cont, num) => cont + num, 0)
       let resultado = soma / 2
    

       return resultado

    } else {
        let termo = numeros.length / 2
        let termoNew = Math.ceil(termo)
    
        let resultado = numeros.slice(termoNew - 1, termoNew)

        return parseInt(resultado)
    }
    
    
}


    const moda = (...numbers) => {
        const counts = {};
        for (const number of numbers) {
            if (!counts[number]) {
            counts[number] = 1;
            } else {
            counts[number] += 1;
            }
        }

        // Find the number with the highest count.
        let maxCount = 0;
        let mode = null;
        for (const [number, count] of Object.entries(counts)) {
            if (count > maxCount) {
            maxCount = count;
            mode = number;
            }
        }
 
        return mode;
    }


//console.log(mediaAritmetica(5, 8,10,15,25,58))
//console.log(mediaPonderada({n:10, p:5}, {n:50, p:60}))
//console.log(mediana(15, 80, 95, 84, 55, 56, 1))
console.log(moda(15, 80, 15, 84, 15, 56, 1))