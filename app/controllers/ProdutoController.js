class ProdutoController {
    constructor() {
        let VUE = document.querySelector.bind(document)
        this.inputCod = VUE('#inpCod')
        this.inputNome = VUE('#inpName')
        this.inputPreco = VUE('#inpCost')
    }

    adiciona(event) {
        event.preventDefault()
        let produto = new Produto(
            this.inputCod,
            toUpperCase(this.inputNome),
            parseFloat(this.inputCode) 
        )

        console.log(produto)
    }
}