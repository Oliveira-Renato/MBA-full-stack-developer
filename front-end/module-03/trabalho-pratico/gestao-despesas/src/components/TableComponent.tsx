import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IDespesas } from '../types/types';

interface IDespesasArray {
  despesas: IDespesas[]
}

export function TableComponent(props: IDespesasArray) {
  const { despesas } = props

  return (
    <>
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
    </>
  )
}