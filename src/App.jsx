import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import Product from './pages/Product';
import ProductList from './pages/ProductList';


function App() {
  const user = useSelector((state)=>state.userReducer.currentUser);

  return <Router>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/checkout" element={<Pay />} />
      <Route path="/success" element={<Success />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
    </Routes>
  </Router>
}

export default App;
