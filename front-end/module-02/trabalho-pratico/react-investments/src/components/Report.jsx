export default function Reports(props) {
  const {
    onHandleReports :reports, 
    onHandlePercentValues : percentValues 
  } = props

  return (
  <>
  {     
    reports.map((investment, investmentIdx) => (
      <div id={investment['investmentId']} key={investmentIdx} className='text-justify'>
        <p className='relative'>
          {investment['month']}/{investment['year']}  
          <span className='ml-4 pr-1'>R$</span> {parseFloat(investment['value']).toFixed(2)}

          { 
            percentValues[investmentIdx].indexOf('-') > - 1 ?
            <span className='absolute right-0 text-red-500'>{percentValues[investmentIdx]}</span>
            : 
            <span className='absolute right-0 text-green-500'>{percentValues[investmentIdx]}</span>
          }
        </p>
        <hr />
      </div>  
    ))
  }
  </>
  )
}