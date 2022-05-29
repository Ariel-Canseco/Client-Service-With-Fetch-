/*
const utils=(()=>{

    const _factorial = (n) =>{
        if (n < 0){
            return -1;
        }
        if(n === 0 || n === 1){
            return 1;
        }
        return n * _factorial(n-1);
    };

    return {
        factorial: _factorial
    };

})();
*/

const utils = (()=>{

    const _sumar = (a,b)=>{

        return a+b;
    };

    const _restar = (a,b)=>{

        return a-b;
    };

    const _multiplicar = (a,b)=>{

        return a*b;
    };

    const _operar = (a,b,funcionOperacionCallback) =>{
        debugger;
        return funcionOperacionCallback(a,b);
    };

    const _dividir = (numbers)=>{
        return numbers[0] / numbers[1];
    };

    const _dividirObjeto = (numbers) =>{
        return numbers.dividendo / numbers.divisor;
    };

    const _factorial = (number) =>{
        if(number == 1){
            return number;
        }
        return number * _factorial(number-1);
    };

    return {
        sumar:_sumar,
        restar:_restar,
        factorial:_factorial,
        multiplicar:_multiplicar,
        dividir:_dividir,
        dividirObjeto:_dividirObjeto,
        operar:_operar
    };
});