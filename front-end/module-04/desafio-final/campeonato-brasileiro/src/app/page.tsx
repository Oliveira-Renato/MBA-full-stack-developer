'use client'

import { Header } from "@/app/components/Header"
import { ButtonComponent } from "./components/Button"

export default function PartidasPage() {
  return (
    <div>
      {/* header component */}
      <Header>Campeonatos Brasileiros!</Header>
      {/* botão campeonatos */}
      <div>
        <ButtonComponent />
      </div>
    </div>
  );
}

