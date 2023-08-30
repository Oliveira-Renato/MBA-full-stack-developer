'use client'
import styled from "styled-components";

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

type ITitle = {
  children?: string
}

export function Header({ children }: ITitle) {
  return (
    <Wrapper>
      <Title>
        {children ? children : "Campeonatos Brasileiros!"}
      </Title>
    </Wrapper>
  )

}