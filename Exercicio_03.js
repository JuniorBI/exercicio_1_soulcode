/*
Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. 
Após receber os valores nas variáveis, inverta os valores dentro das variáveis, ou seja, 
o valor da variável x vai para a variável y e o valor da variável y vai para a variável x. 
Mostre o antes das variáveis e seu depois.
*/

let n1 = parseInt(prompt("digite o primeiro numero inteiro"));
let n2 = parseInt(prompt("Digite o segundo numero inteiro"));

n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;

alert("Invertendo os numero: " + n1);
alert("Invertendo os numero: " + n2); 

// Teste

/*let n1 = 4
let n2 = 8

n1 = n1 + n2; 
n2 = n1 - n2;
n1 = n1 - n2;

console.log("Invertendo os numero: " + n1);
console.log("Invertendo os numero: " + n2);*/
