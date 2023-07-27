import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const MES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desembro']


export default function SelectFilter({ data }: { data?: string[] }) {
  const [year, setYear] = useState<string>('2020');
  const [month, setMonth] = useState<string>('01');

  const yearFilter = data || [];

  const navigate = useNavigate();

  const handleYear = (event: SelectChangeEvent) => {
    setYear(event.target.value);
    navigate('/despesas/' + event.target.value + '-' + month.toString().padStart(2, "0"));
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
          value={month}
          label="Mês"
          onChange={handleMonth}
        >
          {MES.map((fMes, idx) => (
            <MenuItem key={fMes} value={idx}>{fMes}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}