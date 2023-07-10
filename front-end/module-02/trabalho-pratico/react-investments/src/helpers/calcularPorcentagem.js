export default function calculaPorcentagem(pNum1, pNum2) {
  const diferenca = pNum2 - pNum1;
  const porcentagem = (diferenca / pNum1) * 100;

  return parseFloat(porcentagem).toFixed(2)
}