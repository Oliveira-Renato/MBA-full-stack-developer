"use client"
import { useEffect, useState } from "react"

import { useRouter } from 'next/router';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getCampeonatos } from "@/lib/getCampeonatos";
import { useParams } from 'next/navigation'
import styled from "styled-components";

type IParam = {
  year?: string
}

const P = styled.p`
  font-size: .9rem;
  text-align: center;
  color: #333;
  margin: 1.2rem 0;
`

type SelectComponentProps = {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
};

const SelectComponent: React.FC<SelectComponentProps> = ({ selectedYear, setSelectedYear }) => {
  const param = useParams();
  const { year: yearParam } = param;

  //console.log('params', yearParam)
  const [years, setYears] = useState<string[]>([])
  const [year, setYear] = useState<string>('2003')

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string)
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    async function fetchingData() {
      const data = await getCampeonatos()
      setYears(Object.keys(data))
    }
    (async () => await await fetchingData())()

    if (yearParam) {
      setYear(yearParam.toString());
    }
  }, [yearParam])

  return (
    <Box sx={{ minWidth: 120, textAlign: 'center' }}>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label">Ano</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Ano"
          onChange={handleChange}
        >
          {years.map(pYear => (
            <MenuItem key={pYear} value={pYear}>{pYear}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <div>
        <P>Campeonato brasileiro de <strong>{year}</strong></P>
        <p>Classificação</p>
      </div>
    </Box>
  )
}

export default SelectComponent;






