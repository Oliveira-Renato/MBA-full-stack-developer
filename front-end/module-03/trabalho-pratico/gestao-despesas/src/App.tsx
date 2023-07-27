import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/despesas" element={<Home />} />
          <Route path="/despesas/:datafilter" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
