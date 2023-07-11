import getData from '../helpers/getData'
import calculaPorcentagem from '../helpers/calcularPorcentagem'

export default function Investments() {
  const data = getData()
  const idInv = data['investments'].map(obj => obj['id'])
  const description = data['investments'].map(obj => obj['description'])
  const rendimentoTotal = new Array()
  const rendimentoPorcentagemTotal = new Array()
  const newData = new Array()
  const porcentagemValores = [];

  idInv.forEach((id, idx) => {
    //Variavel recebe todos reports
    let teste = data['reports'].filter(obj => obj['investmentId'] === id)
    //Ordena por mês os reports e insere no array
    newData.push(teste.sort((a, b) => a['month'] - b['month']))

    let rendimento = newData[idx].map(report => report['value'])
    //Calcula porcetagem totol de cada rendimento
    let rendimentoPorcentagem = calculaPorcentagem(rendimento[0], rendimento[rendimento.length - 1])
    //Calcula diferença
    rendimento = rendimento[rendimento.length - 1] -  rendimento[0]
    rendimento = parseFloat(rendimento).toFixed(2)     

    rendimentoPorcentagemTotal.push(rendimentoPorcentagem)
    rendimentoTotal.push(rendimento)
  })

  const handlePercentValues = () => {
    Object.values(newData).forEach((array,jdx) => {
      
      let previousValue = 0

      if(previousValue !== array.length - 1) {
        for (let i = 0; i < array.length; i++) {
          if(i === 0 ) {
            porcentagemValores.push('0');
          } else {
            ++previousValue
            const currentValue = array[i - 1].value;
            const nextValue = array[previousValue].value;
            const result = calculaPorcentagem(currentValue, nextValue);
            porcentagemValores.push(result);
          }
        }
      }
    })
  }

  handlePercentValues()
  return (
    <div>
       {
        newData.map((array, idx) => (
          <div id={idx} key={idx} className='m-8'>
            <h4 className='text-center font-bold text-gray-900'>{description[idx]}</h4>
            <h3 className='text-center text-gray-600'>
              Rendimento Total: R$: {rendimentoTotal[idx]}
              <span className='pl-4 porcentagem'>({rendimentoPorcentagemTotal[idx]})</span>
            </h3>
            {     
              array.map((investment, investmentIdx) => (
                <div id={investment['investmentId']} key={investmentIdx} className='text-justify'>
                  <p className='relative'>
                    {investment['month']}/{investment['year']}  
                    <span className='ml-4 pr-1'>R$</span> {parseFloat(investment['value']).toFixed(2)}
                    <span className='absolute right-0 porcentagem'>{porcentagemValores[investmentIdx]}</span>
                  </p>
                  <hr />
                </div>  
              ))
            }
          </div>
        ))
      }
    </div>
  )
}