const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let somaTotal = 0;
const faturamentoPorEstadoPorcentagem = {};

for (let chave in faturamentoPorEstado) {
  somaTotal += faturamentoPorEstado[chave];
}
for (let chave in faturamentoPorEstado) {
  let porcentagem = (faturamentoPorEstado[chave] / somaTotal) * 100;

  let formate = porcentagem.toFixed(2);

  faturamentoPorEstadoPorcentagem[chave] = formate.replace(".", ",") + "%";
}

console.table(faturamentoPorEstadoPorcentagem);
