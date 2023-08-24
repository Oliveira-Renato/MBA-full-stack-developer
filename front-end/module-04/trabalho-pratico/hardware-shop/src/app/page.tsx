import { Header } from "./components/Header";
import { ListProducts } from "./components/ListProducts";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Hardware shop</h1>
      <main>
        {/* lista */}
        <ListProducts />
      </main>
    </div>

  )
}
