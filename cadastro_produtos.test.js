const cadastro = require('./cadastro_produto')

test('Listar Produtos sem cadastrar deve retornar vazio', () => {
    expect(cadastro.listar()).toEqual([]);
    expect(cadastro.listar().length).toBe(0);
})