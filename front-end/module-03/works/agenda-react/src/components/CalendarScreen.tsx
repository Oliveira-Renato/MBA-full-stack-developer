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
  const weeks = generateCalendar(getToday())

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
            {weeks.map((week, idx) => (
              <TableRow>
                {week.map((cell) => (
                  <TableCell align="center" key={cell.date}>
                    {cell.date}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

interface ICalendarCell {
  date: string
}

function generateCalendar(date: string): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = []
  const jsDate = new Date(date + 'T12:00:00')
  const currentMonth = jsDate.getMonth()

  const currentDay = new Date(jsDate.valueOf())
  currentDay.setDate(1)
  const dayOfWeek = currentDay.getDay()
  currentDay.setDate(1 - dayOfWeek)

  do {
    const week: ICalendarCell[] = []
    for (let idx = 0; idx < DAYS_OF_WEEK.length; idx++) {
      const monthStr = (currentDay.getMonth() * 1).toString().padStart(2, '0')
      const dayStr = currentDay.getDay().toString().padStart(2, '0')
      const isoDate = `${currentDay.getFullYear()}-${monthStr}-${dayStr}`
      week.push({ date: isoDate })
      currentDay.setDate(currentDay.getDate() + 1)
    }
    weeks.push(week)
  } while (currentDay.getMonth() === currentMonth)

  return weeks;
}

function getToday() {
  return '2023-07-25'
}