import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </Router>
}

export default App;
