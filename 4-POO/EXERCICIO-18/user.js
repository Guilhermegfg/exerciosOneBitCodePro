

class user  {
    constructor (fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login (contato, senha) {
        this.contato = contato
        this.senha = senha

        if(contato === this.email && senha === this.password ){
            console.log("ok")
        } else {
            console.log("Usuário não encontado")
        }

    }
}

const gfg = new user("Guilherme", "guilhermegfg2011@hotmail.com", "1234567")
console.log(gfg)

gfg.login("guilhermegfg2011@hotmail.com", "1234567")
