"use client"
import { Header } from "@/app/components/Header"
import { ButtonComponent } from "./components/Button"
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PartidasPage() {
  return (
    <div>
      {/* header component */}
      <Header>Campeonatos Brasileiros!</Header>
      {/* botão campeonatos */}
      <Div>
        <ButtonComponent />
      </Div>
    </div>
  );
}

