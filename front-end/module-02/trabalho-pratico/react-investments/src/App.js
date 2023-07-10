import Header  from './components/Header';
import Investments from './components/Investment';
import './input.css'

function App() {
  return (
    <div className="App">
        <Header>React Investments</Header>
        <main>
          <Investments></Investments>
        </main>
    </div>
  );
}

export default App;
