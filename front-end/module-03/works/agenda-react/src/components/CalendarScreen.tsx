import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';

const DAYS_OF_WEEK = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']

export function CalendarScreen() {

  return (
    <Box sx={{
      display: "flex",
      height: "100%",
      alignItens: "stretch"
    }}>
      {/* left */}
      <Box sx={{
        borderRight: "1px solid rgb(244, 244, 244)",
        padding: "8px 16px",
        width: "14em"
      }}>
        <h2>Agenda React</h2>
        <Button variant="contained">Nova agenda</Button>

        <Box sx={{ marginTop: "64px" }}>
          <h3>Agendas</h3>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Pessoal" />
            <FormControlLabel control={<Checkbox />} label="Trabalho" />
          </FormGroup>
        </Box>
      </Box>

      <TableContainer component={"div"}>
        <Box sx={{ display: "flex", alignItems: "center", padding: "8px 16px" }}>
          <Box>
            <IconButton arial-label="mês anterior">
              <Icon>chevron_left</Icon>
            </IconButton>
            <IconButton arial-label="próximo mês">
              <Icon>chevron_right</Icon>
            </IconButton>
          </Box>
          <Box sx={{ marginLeft: "16px", flex: "1" }} component={"h3"}>
            Julho de 2023
          </Box>

          <IconButton arial-label="Usuário">
            <Avatar>
              <Icon>person</Icon>
            </Avatar>
          </IconButton>
        </Box>

        <Table sx={{
          minHeight: "100%",
          borderTop: "1px solid rgb(224, 224, 224)",
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
    </Box>
  )
}