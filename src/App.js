import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { SingleProduct } from './components/SingleProduct';
import { SP } from './components/sp';
import { Cart } from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/:product" element={<SingleProduct/>}/>
        <Route path="/latest/:id" element={<SP/>}/>
        <Route path="/products/:categoryid" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
