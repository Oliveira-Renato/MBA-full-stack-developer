import { title } from "process";
import styled from "styled-components";
import { __String } from "typescript";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: #afe68a;
  display: block;
  margin: 0 0 2rem 0;
`;

export function Header({ children }: { children: string }) {
  return (
    <Wrapper>
      <Title>
        {children ? children : "Campeonatos Brasileiros!"}
      </Title>
    </Wrapper>
  )

}