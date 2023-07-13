import getData from '../helpers/getData'
import calculaPorcentagem from '../helpers/calcularPorcentagem'
import Reports from './Report'

export default function Investments() {
  const data = getData();
  const investments = data.investments;
  const reports = data.reports;

  const investmentItems = investments.map((investment, idx) => {
    const filteredReports = reports.filter(report => report.investmentId === investment.id);
    const sortedReports = filteredReports.sort((a, b) => a.month - b.month);
    const rendimento = sortedReports[sortedReports.length - 1].value - sortedReports[0].value;
    const rendimentoPorcentagem = calculaPorcentagem(sortedReports[0].value, sortedReports[sortedReports.length - 1].value);

    return {
      id: investment.id,
      description: investment.description,
      rendimento: rendimento.toFixed(2),
      rendimentoPorcentagem,
      reports: sortedReports,
    };
  });

  const handlePercentValues = () => {
    return investmentItems.map((investment) => {
      const armazenaPorcent = investment.reports.map((report, index) => {
        if (index === 0) {
          return '0';
        } else {
          const currentValue = investment.reports[index - 1].value;
          const nextValue = report.value;
          const result = calculaPorcentagem(currentValue, nextValue);
          return result;
        }
      });

      return armazenaPorcent;
    });
  };

  const porcentagemValores = handlePercentValues();
  
  return (
    <div>
       {
        investmentItems.map((investment, idx) => (
          <div id={idx} key={idx} className='m-8'>
            <h4 className='text-center font-bold text-gray-900'>{investment.description}</h4>
            <h3 className='text-center text-gray-600'>
              Rendimento Total: R$: {investment.rendimento}

              <span 
                id='rendimento_value'
                className={`pl-4 ${investment.rendimentoPorcentagem.indexOf('-') > -1 ? 'text-red-500' : 'text-green-500'}`}>
                  ({investment.rendimentoPorcentagem})
              </span>
            </h3>

            {/* Reports here */}
            <Reports
              onHandleReports={investment.reports}
              onHandlePercentValues={porcentagemValores[idx]}
            /> 
          </div>
        ))
      }
    </div>
  )
}