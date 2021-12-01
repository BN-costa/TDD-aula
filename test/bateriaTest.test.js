let Calc = require ('./src/funcao')// faz a requisição da nossa classe
describe('Calculadora', function(){// onde vamos fazer a bateria de teste
    let calculadora = new Calc()
it('deve multiplicar dois números', function(){
    expect(calculadora.multiplicar(2,2)).toBe(4);  
})
it('deve subtrair dois números', function(){
    expect(calculadora.subtrair(2,2)).toBe(0);
})
it('deve somar dois números', function(){
    expect(calculadora.somar(2,2)).toBe(4);
}) 
it('deve dividir dois números', function(){
    expect(calculadora.dividir(2,2)).toBe(1);
}) 
})
