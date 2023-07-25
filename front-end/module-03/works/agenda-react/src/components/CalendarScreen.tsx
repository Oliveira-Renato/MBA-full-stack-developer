import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DAYS_OF_WEEK = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']

export function CalendarScreen() {

  return (
    <TableContainer sx={{ height: "100%" }} component={"div"}>
      <Table sx={{
        minHeight: "100%",
        "& td ~ td, th ~ th": {
          border: "1px solid rgb(224, 224, 224)"
        }
      }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {DAYS_OF_WEEK.map((day) => (
              <TableCell align="center" key={day}>{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow>
            {DAYS_OF_WEEK.map((day) => (
              <TableCell align="center" key={day}>x</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {DAYS_OF_WEEK.map((day) => (
              <TableCell align="center" key={day}>x</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {DAYS_OF_WEEK.map((day) => (
              <TableCell align="center" key={day}>x</TableCell>
            ))}
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  )
}