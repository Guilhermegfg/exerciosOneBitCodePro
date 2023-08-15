class product {
    constructor (name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0
    }

    addTostock (number) {
        this.inStock += number

    }

    calculateDiscount(desconto) {
        let percentagem = desconto / 100
        let preco = this.price - (this.price * percentagem)
        console.log(`O valor com desconto é de ${preco} reais`)

    }
}

const chuteira = new product("chuteira", "Usado para futebol de campo", 100)

chuteira.addTostock(550)
chuteira.calculateDiscount(50)

console.log(chuteira)