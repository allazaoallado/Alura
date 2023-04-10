let tanque = 40 // Quantidade maxima do tanque
let gasolina = 480 // Quantidade de km percorridos com 40L quando usando gasolina
let alcool = 300 //  Quantidade de km percorridos com 40L quando usando álcool

carro = (tanque, gasolina, alcool) => {
    consumoGasolina = gasolina/tanque
    consumoAlcool = alcool/tanque;
    console.log(`Quantidade litros consumidos com Gasolina: ${consumoGasolina}L`)
    console.log(`Quantidade litros consumidos com Ácool: ${consumoAlcool}L`)
    
}

carro(40,480,300)


// for(var i = 0; i < 10; i++){
//     console.log('<br>')
// }


for( var i = 1; i <= 10; i++){
    console.log(7 * i)
}


var total = 0
console.log(total)
total++
console.log(total)