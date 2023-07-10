import getData from '../helpers/getData'
import calculaPorcetagem from '../helpers/calcularPorcentagem'

export default function Investments() {
  const data = getData()
  const idInv = data['investments'].map(obj => obj['id'])
  const description = data['investments'].map(obj => obj['description'])
  const rendimentoTotal = []
  const newData = []

  idInv.forEach((id, idx) => {
    let teste = data['reports'].filter(obj => obj['investmentId'] === id)
    newData.push(teste.sort((a, b) => a['month'] - b['month']))

    let rendimento = newData[idx].map(report => report['value'])
        rendimento = rendimento[rendimento.length - 1] -  rendimento[0]
        rendimento = parseFloat(rendimento).toFixed(2)                     
    
    rendimentoTotal.push(rendimento)
  })

  newData.forEach(obj => {
    console.log(obj)
  })

  return (
    <div>
       {
        newData.map((array, idx) => (
          <div id={idx} key={idx}>
            <h4 className='text-center font-bold text-gray-900'>{description[idx]}</h4>
            <h3 className='text-center text-gray-600'>Rendimento Total: R$: {rendimentoTotal[idx]}</h3>
            {     
              array.map((investment, investmentIdx) => (
                <div id={investment['investmentId']} key={investmentIdx}>
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