function email (email) {

    try {
        const verificar = email.match(/@/)[0]
    

        const verificarTwo = email.match(/..+@/)[0]
        

        const verificarThree = email.match(/@..+/)[0]


        const verificarFour = email.match(/\...+/)[0]


        if (verificar === "@" && verificarTwo.length > 2 && verificarThree.length > 2 && verificarFour.length > 2){
            return "Email válido"
        }

    } catch {
        return "email inválido"
    }


    

}

console.log(email("gutredtedf"))
console.log(email("guilhermegfg@2011hotmail.com"))