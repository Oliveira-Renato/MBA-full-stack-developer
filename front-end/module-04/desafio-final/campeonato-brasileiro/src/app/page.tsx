'use client'

import { IAnos } from "@/app/types/types"
import { useEffect, useState } from "react"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getCampeonatos } from "@/lib/getCampeonatos";


export default function Home() {
  const [data, setData] = useState<IAnos[]>([])
  //const  = data && data.flatMap(obj => Object.keys(obj))
  //data select
  const [age, setAge] = React.useState('');
  const [years, setYears] = useState<string[]>([])
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };


  const rows: number[] = [1, 2, 3, 4, 5]

  useEffect(() => {
    async function fetchingData() {
      const data = await getCampeonatos()
      setData(data)
      setYears(Object.keys(data))
    }
    (async () => await await fetchingData())()

    // if (Object.keys(data).length > 0) {
    //   setYears(data.flatMap(obj => Object.keys(obj)))
    // }
  }, [])

  console.log(data)
  console.log(years)
  return (
    <div>
      {/* header component */}
      <header>
        <div>
          <h1>Campeonato Brasileiro</h1>
        </div>
      </header>
      {/* select component */}
      <Box sx={{ minWidth: 120, textAlign: 'center' }}>
        <FormControl sx={{ width: 120 }}>
          <InputLabel id="demo-simple-select-label">Ano</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Ano"
            onChange={handleChange}
          >
            {years.map(year => (
              <MenuItem value={Number(year)}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <div>
          <p>Campeonato brasileiro de 2003</p>
          <p>Classificação</p>
        </div>
      </Box>

      {/* table component */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">P</TableCell>
              <TableCell align="right">V</TableCell>
              <TableCell align="right">E</TableCell>
              <TableCell align="right">D</TableCell>
              <TableCell align="right">GP</TableCell>
              <TableCell align="right">GC</TableCell>
              <TableCell align="right">S</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  wwww
                </TableCell>
                <TableCell align="right">a</TableCell>
                <TableCell align="right">a</TableCell>
                <TableCell align="right">a</TableCell>
                <TableCell align="right">a</TableCell>
                <TableCell align="right">a</TableCell>
                <TableCell align="right">a</TableCell>
                <TableCell align="right">a</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
