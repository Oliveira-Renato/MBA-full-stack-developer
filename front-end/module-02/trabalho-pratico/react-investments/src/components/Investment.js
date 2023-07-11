import getData from '../helpers/getData'
import calculaPorcentagem from '../helpers/calcularPorcentagem'

export default function Investments() {
  const data = getData()
  const idInv = data['investments'].map(obj => obj['id'])
  const description = data['investments'].map(obj => obj['description'])
  const rendimentoTotal = []
  const rendimentoPorcentagemTotal = []
  const newData = []

  //debugger

  idInv.forEach((id, idx) => {
    let teste = data['reports'].filter(obj => obj['investmentId'] === id)
    newData.push(teste.sort((a, b) => a['month'] - b['month']))

    let rendimento = newData[idx].map(report => report['value'])
    let rendimentoPorcentagem = calculaPorcentagem(rendimento[0], rendimento[rendimento.length - 1])
        rendimento = rendimento[rendimento.length - 1] -  rendimento[0]
        rendimento = parseFloat(rendimento).toFixed(2)     

    rendimentoPorcentagemTotal.push(rendimentoPorcentagem)
    rendimentoTotal.push(rendimento)
  })

  newData.forEach(obj => {
    console.log(obj)
  })

  return (
    <div>
       {
        newData.map((array, idx) => (
          <div id={idx} key={idx} className='m-8'>
            <h4 className='text-center font-bold text-gray-900'>{description[idx]}</h4>
            <h3 className='text-center text-gray-600'>
              Rendimento Total: R$: {rendimentoTotal[idx]}
              <span className='pl-4'>({rendimentoPorcentagemTotal[idx]})</span>
            </h3>
            {     
              array.map((investment, investmentIdx) => (
                <div id={investment['investmentId']} key={investmentIdx} className='text-justify'>
                  <p>
                    {investment['month']}/{investment['year']}  
                    <span className='ml-4 pr-1'>R$</span> {parseFloat(investment['value']).toFixed(2)}
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