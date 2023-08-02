import { getDespesas, getDespesasEndpoint } from '../server/backend';
import { useEffect, useRef, useState } from 'react';
import { IDespesas } from '../types/types';
import { Box } from '@mui/system';
import SelectFilter from '../components/Select';
import { useParams } from 'react-router-dom';
import { TableComponent } from '../components/TableComponent';
import { Header } from '../components/Header';

export function Home() {
  const { datafilter } = useParams();
  const [despesas, setDespesas] = useState<IDespesas[]>([])
  const [years, setYears] = useState<IDespesas[]>([])
  const despesasRef = useRef(despesas);

  function handleData(): string[] {
    let data = years.map(despesa => despesa.mes)
    let newYear = new Set<string>()

    for (let i in data) {
      let year = (data[i].split('-'))[0]
      newYear.add(year)
    }
    return Array.from(newYear) || ['']
  }

  function handleDespesaTotal() {
    if (despesas.length > 0) {
      const valorDespesas = despesas.map(despesa => despesa.valor)
      const total = valorDespesas.reduce((a, b) => b + a)

      return (total.toFixed(2)).toString().replace('.', ',')
    }
    return '0'
  }

  useEffect(() => {
    async function getData() {
      try {
        if (datafilter) {
          let newData = datafilter.split('-')
          const datafilterReturn: IDespesas[] | [] = await getDespesas(newData[0], newData[1]);
          return datafilterReturn;
        } else {
          throw new Error('no filter')
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }

    (async () => {
      const newData = await getData();
      if (despesasRef.current.length !== newData.length) {
        setDespesas(newData);
      }
      despesasRef.current = newData;
    })();
  }, [datafilter, despesas])

  useEffect(() => {
    (async () => { setYears(await getDespesasEndpoint()) })()
  }, [])

  return (
    <Box
      sx={{ padding: '0 40px' }}>
      {/* header */}
      < Header />
      {/* filtro */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>
          <SelectFilter data={handleData()} />
        </Box>
        <Box sx={{ flex: '1', textAlign: 'right' }}>
          Despesa total: <strong>R$ {handleDespesaTotal()}</strong>
        </Box>
      </Box>
      {/* table */}
      <TableComponent despesas={despesas} />
    </Box>
  )
}