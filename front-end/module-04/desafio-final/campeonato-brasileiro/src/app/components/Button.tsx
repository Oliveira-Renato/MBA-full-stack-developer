'use client'
import * as React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link'
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export function ButtonComponent() {
  return (
    <Div>
      <Link href="/partidas/2003">
        <Button variant="outlined">
          Ver Lista de Campeonatos
        </Button>
      </Link >
    </Div>
  )
}