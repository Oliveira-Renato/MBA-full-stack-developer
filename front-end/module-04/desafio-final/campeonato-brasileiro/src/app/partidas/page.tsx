"use client"
import styled from "styled-components";
import { ButtonComponent } from "../components/Button";
import { Header } from "../components/Header";

const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #333;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PartidasPage() {
  return (
    <div>
      {/* header component */}
      <Header>Página não encontrada!</Header>
      <Div>
        <P>
          Clique no botão abaixo para ver as partidas, ou <a href="/">click aqui</a> para retornar a página inicial.
        </P>
        <ButtonComponent />
      </Div>
    </div>
  )
}