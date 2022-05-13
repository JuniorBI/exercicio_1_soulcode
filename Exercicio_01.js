/* Crie um código que receba 3 valores do comprimento 
de um triângulo e depois mostre um alert informando se 
o triângulo é equilátero, isóceles ou escaleno.*/

let a = parseInt(prompt('Digite o primeiro lado: '))
let b = parseInt(prompt('Digite o segundo lado: '))
let c = parseInt(prompt('Digite terceiro o lado: '))

if(a < b + c && b < c + a && c < a + b) { //verifica o tamanho dos lados
    if(a==b && b==c){
        alert("Equilátero")
    } else if ( a==b || a==c || b==c) {
        alert("Isósceles")
    } else {
        alert ("Escaleno")
    }     
} else {
    alert("Os lados não formam um triangulo!")
}


