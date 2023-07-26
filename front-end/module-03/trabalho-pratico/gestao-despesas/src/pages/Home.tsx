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

export function Home() {
  const [despesas, setDespesas] = useState<IDespesas[]>([])

  useEffect(() => {
    (async () => {
      setDespesas(await getDespesasEndpoint())
    })()
  }, [despesas])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
  )
}