import { faturamentoMensal } from "./faturamento.js";
const { diafaturamento } = faturamentoMensal;

const maiorFaturamento = calcularMaiorFaturamento(diafaturamento);
const menorFaturamento = calcularMenorFaturamento(diafaturamento);
const media = calcularMedia(diafaturamento);
const diasMaiorQueMedia = MaiorQueMedia(media, diafaturamento);

console.log(
  "O menor valor de faturamento ocorrido em um dia do mês foi: " +
    menorFaturamento
);
console.log(
  "O maior valor de faturamento ocorrido em um dia do mês foi: " +
    maiorFaturamento
);
console.log(
  "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi: " +
    diasMaiorQueMedia
);

function MaiorQueMedia(media, dias) {
  let maiorQueMedia = 0;
  dias.forEach((diaFaturamento) => {
    const { faturamento } = diaFaturamento;

    if (media > faturamento) {
      maiorQueMedia++;
    }
  });
  return maiorQueMedia;
}

function calcularMaiorFaturamento(dias) {
  let diaMaisForte = 0;

  dias.forEach((diaFaturamento) => {
    const { faturamento } = diaFaturamento;

    if (diaMaisForte < faturamento) {
      diaMaisForte = faturamento;
    }

    if (diaMaisForte == 0) {
      diaMaisForte = faturamento;
    }
  });

  return diaMaisForte;
}

function calcularMedia(dias) {
  let somaFaturamento = 0,
    diasIgaulZero = 0;
  dias.forEach((diaFaturamento) => {
    const { faturamento } = diaFaturamento;

    somaFaturamento += faturamento;

    if (faturamento === 0) {
      diasIgaulZero++;
    }
  });

  const mediaFaturamento = somaFaturamento / (dias.length - diasIgaulZero);

  return mediaFaturamento;
}

function calcularMenorFaturamento(dias) {
  let diaMaisFraco = 0;

  dias.forEach((diaFaturamento) => {
    const { faturamento } = diaFaturamento;

    if (diaMaisFraco > faturamento) {
      diaMaisFraco = faturamento;
    }

    if (diaMaisFraco == 0) {
      diaMaisFraco = faturamento;
    }
  });

  return diaMaisFraco;
}
