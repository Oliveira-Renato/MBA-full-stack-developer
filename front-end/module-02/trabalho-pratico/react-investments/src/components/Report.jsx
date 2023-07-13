export default function Reports(props) {
  const {
    onHandleReports :reports, 
    onHandlePercentValues : percentValues 
  } = props

  const percentColor = (pRendimento) => pRendimento.indexOf('-') > -1 ? 'text-red-500' : 'text-green-500'
  
  return (
    <>
      {     
        reports.map((investment, investmentIdx) => (
          <div id={investment['investmentId']} key={investmentIdx} className='text-justify'>
            <p className='relative'>
              {investment['month']}/{investment['year']}  
              <span className='ml-4 pr-1'>R$</span> {parseFloat(investment['value']).toFixed(2)}

                <span className={`absolute right-0 ${percentColor(percentValues[investmentIdx])}`}>{percentValues[investmentIdx]}</span>
            </p>
            <hr />
          </div>  
        ))
      }
  </>
  )
}