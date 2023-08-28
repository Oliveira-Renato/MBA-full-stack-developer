"use client"
import { useEffect, useState } from "react"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getPartidas } from "@/lib/getPartidas";
import { ITimesEstatiscas } from "../types/types";

type ITime = {
  [key: string]: ITimesEstatiscas
}
type IYear = {
  year: string
}

export function TableComponent(param: IYear) {
  const [resultados, setResultados] = useState<ITime>({})
  const [times, setTimes] = useState<string[]>([])

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await getPartidas(param.year);

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

      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    function initializeTeamStats(): ITimesEstatiscas {
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
    }): ITimesEstatiscas {
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
  }, [param.year])

  return (
    <TableContainer sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '0 4rem'
    }} component={Paper}>
      <Table sx={{
        minWidth: 650,
        margin: '1.8rem 0'
      }} aria-label="simple table">
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
  )
}