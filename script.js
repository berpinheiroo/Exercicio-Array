/* Crie um algoritmo que receba um array e um número inteiro positivo. Popule o array
e no final exiba os índices em que número inserido aparece nesse array. Para testes
do exercício use até 10 elementos no array. */

var arrayA = []
var b

for (var index = 0; index < 10; index++) {
   arrayA[index] = parseInt(prompt("Insira um numero para A"))
}
console.log(arrayA)

b = parseInt(prompt("Insira um numero para B"))
for (var indexA = 0; indexA < 10; indexA++) {
   if (arrayA[indexA] == b) {
      console.log(" O numero " + b + " esta na posicao " + indexA + " do array A ")
   }
}