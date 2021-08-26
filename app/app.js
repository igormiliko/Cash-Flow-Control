let controller = new ProdutoController()

document
    .querySelector('form')
    .addEventListener('submit', controller.adiciona.bind(controller))