const frase = "REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU";

const arrayFraseRevese = [];
let fraseRevese = "";

for (let char of frase) {
  arrayFraseRevese.unshift(char);
}

for (let char of arrayFraseRevese) {
  fraseRevese += char;
}

console.log(`Frase reversa:
${fraseRevese}`);

console.log(`Frase reversa sem espaços:
${fraseRevese.replace(/ /g, "")}`);
