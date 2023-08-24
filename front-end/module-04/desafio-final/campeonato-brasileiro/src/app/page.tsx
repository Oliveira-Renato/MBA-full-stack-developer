'use client'

import { IAnos, IPartidas } from "@/app/types/types"
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
import { getPartidas } from "@/lib/getPartidas";

interface TeamStats {
  pontos: number;
  vitorias: number;
  derrotas: number;
  empates: number;
  gols_pro: number;
  gols_contra: number;
  saldo: number;
}

type ITeam = {
  [key: string]: TeamStats
}


export default function Home() {
  const [data, setData] = useState<IAnos[]>([])
  const [resultados, setResultados] = useState<ITeam>({})
  const [times, setTimes] = useState<string[]>([])
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
  }, [])

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await getPartidas('2003');

        //const resultados: Record<string, TeamStats> = {};

        Object.values(response).forEach(obj => {

          const { partidas } = obj;

          partidas.forEach(obj => {
            const { mandante, visitante, pontuacao_geral_mandante: mandanteP, pontuacao_geral_visitante: visitanteP } = obj;

            if (!resultados[mandante]) resultados[mandante] = initializeTeamStats();
            if (!resultados[visitante]) resultados[visitante] = initializeTeamStats();

            resultados[mandante] = updateTeamStats(mandanteP);
            resultados[visitante] = updateTeamStats(visitanteP);
          });
        });

        const sortedTeams = Object.keys(resultados).sort((a, b) => {
          if (resultados[b].pontos - resultados[a].pontos !== 0) {
            return resultados[b].pontos - resultados[a].pontos;
          } else {
            return resultados[b].gols_pro - resultados[a].gols_pro;
          }
        });

        setTimes(sortedTeams.slice(0, 10))
        // console.log("Top 10 times com mais pontos:");
        console.log(times)
        times.forEach((team, index) => {
          // console.log(`${index + 1}. ${team} - Pontos: ${resultados[team].pontos}`);
          // console.log(`${index + 1}. ${team} - Estatísticas:`);
          // console.log(`   Vitorias: ${resultados[team].vitorias}`);
          // console.log(`   Empates: ${resultados[team].empates}`);
          // console.log(`   Derrotas: ${resultados[team].derrotas}`);
          // console.log(`   Gols Pro: ${resultados[team].gols_pro}`);
          // console.log(`   Gols Contra: ${resultados[team].gols_contra}`);
          // console.log(`   Saldo: ${resultados[team].saldo}`);
        });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }


    function initializeTeamStats(): TeamStats {
      return {
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo: 0,
      };
    }

    function updateTeamStats(newStats: {
      total_pontos: number;
      total_vitorias: number;
      total_derrotas: number;
      total_empates: number;
      total_gols_marcados: number;
      total_gols_sofridos: number;
    }): TeamStats {
      return {
        pontos: newStats.total_pontos,
        vitorias: newStats.total_vitorias,
        derrotas: newStats.total_derrotas,
        empates: newStats.total_empates,
        gols_pro: newStats.total_gols_marcados,
        gols_contra: newStats.total_gols_sofridos,
        saldo: newStats.total_gols_marcados - newStats.total_gols_sofridos,
      };
    }

    (async () => await fetchData())()
  }, [])

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
              <MenuItem key={year} value={Number(year)}>{year}</MenuItem>
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
            {times.map((team, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {team}
                </TableCell>
                <TableCell align="right">{resultados[team].pontos}</TableCell>
                <TableCell align="right">{resultados[team].vitorias}</TableCell>
                <TableCell align="right">{resultados[team].empates}</TableCell>
                <TableCell align="right">{resultados[team].derrotas}</TableCell>
                <TableCell align="right">{resultados[team].gols_pro}</TableCell>
                <TableCell align="right">{resultados[team].gols_contra}</TableCell>
                <TableCell align="right">{resultados[team].saldo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
