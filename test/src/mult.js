class Calc{
    constructor(){
        this.valorA = 0
        this.valorB = 0
    }
    multiplicar(valA, valB){
        this.valorA=valA;
        this.valorB=valB;
        return this.valorA * this.valorB;
    }
    somar(valA, valB){
        this.valorA=valA;
        this.valorB=valB;
        return this.valorA + this.valorB;
    }
    dividir(valA, valB){
        this.valorA=valA;
        this.valorB=valB;
        return this.valorA / this.valorB;
    }
    subtrair(valA, valB){
        this.valorA=valA;
        this.valorB=valB;
        return this.valorA - this.valorB;
    }
}
module.exports = Calc;