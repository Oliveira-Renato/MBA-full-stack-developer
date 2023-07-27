import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDespesasEndpoint } from '../server/backend';
import { useEffect, useState } from 'react';
import { IDespesas } from '../types/types';
import { Box } from '@mui/system';
import SelectFilter from '../components/Select';

export function Home() {
  const [despesas, setDespesas] = useState<IDespesas[]>([])

  useEffect(() => {
    (async () => {
      despesas.length === 0 && setDespesas(await getDespesasEndpoint())
    })()
  }, [despesas])

  function handleData(): string[] {
    let data = despesas.map(despesa => despesa.mes)
    let newYear = new Set<string>()

    for (let i in data) {
      let year = (data[i].split('-'))[0]
      newYear.add(year)
    }
    return Array.from(newYear) || ['']
  }

  function handleDespesaTotal() {
    const valorDespesas = despesas.map(despesa => despesa.valor)
    const total = valorDespesas.reduce((a, b) => b + a)

    return (total.toFixed(2)).toString().replace('.', ',')
  }

  return (
    <Box
      sx={{ padding: '40px' }}>
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, margin: '20px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Despesa</TableCell>
              <TableCell align="center">Categorias</TableCell>
              <TableCell align="center">Dias</TableCell>
              <TableCell align="center">Valor (R$)</TableCell>
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