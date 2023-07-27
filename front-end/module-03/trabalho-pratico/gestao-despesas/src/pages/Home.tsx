import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getDespesas, getDespesasEndpoint } from '../server/backend';
import { useEffect, useRef, useState } from 'react';
import { IDespesas } from '../types/types';
import { Box } from '@mui/system';
import SelectFilter from '../components/Select';
import { useParams } from 'react-router-dom';

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
      sx={{ padding: '20px 40px' }}>
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
      <TableContainer sx={{ marginTop: '12px', borderTop: '1px solid rgb(244,244,244)' }} component={"div"}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '16px' }} align="center">Despesa</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">Categorias</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">Dias</TableCell>
              <TableCell sx={{ fontSize: '16px' }} align="center">Valor (R$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* map data here */}
            {despesas.map((despesa, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{despesa.descricao}</TableCell>
                <TableCell align="center">{despesa.categoria}</TableCell>
                <TableCell align="center">{despesa.dia}</TableCell>
                <TableCell align="center">{despesa.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}