function senha (senha) {
    try {
        if(senha.length >= 8 && senha.match(/\d/)[0].length > 0 && senha.match(/[a-z]/)[0].length > 0  && senha.match(/[A-Z]/)[0].length > 0 && senha.match(/[\W]/)[0].length > 0 ) {
           return "Senha válida"
        } 

    } catch{
        return "Senha inválida"
    }




}

console.log(senha("Dwr8gdgdvds"))
console.log(senha("Dwr@8gdgdvds"))
