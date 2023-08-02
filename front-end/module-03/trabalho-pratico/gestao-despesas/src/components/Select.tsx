import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

const MES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desembro']


export default function SelectFilter({ data }: { data?: string[] }) {
  const { datafilter } = useParams();
  const navigate = useNavigate();

  const currentMonth = datafilter !== undefined ? (datafilter.split('-'))[1] : '1'

  const [year, setYear] = useState<string>('2020');
  const [month, setMonth] = useState<string>(currentMonth);
  const yearFilter = data || [];

  const handleYear = (event: SelectChangeEvent) => {
    let newMonth = Number(month) + 1
    setYear(event.target.value);
    navigate('/despesas/' + event.target.value + '-' + newMonth.toString().padStart(2, "0"));
  }
  const handleMonth = (event: SelectChangeEvent) => {
    let newMonth = Number(event.target.value) + 1
    setMonth(event.target.value);
    navigate('/despesas/' + year + '-' + newMonth.toString().padStart(2, "0"));
  }

  return (
    <div>
      {/* YEAR  */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Ano</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Ano"
          onChange={handleYear}
        >
          {yearFilter.map((ano, idx) => (
            <MenuItem key={ano} value={ano}>{ano}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* MÊS */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Mês</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month || currentMonth}
          label="Mês"
          onChange={handleMonth}
        >
          {MES.map((fMes, idx) => (
            <MenuItem key={fMes} value={idx || currentMonth}>{fMes}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}