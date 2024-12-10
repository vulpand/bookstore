import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import './App.css';
import ShoppingCart from './components/ShoppingCart';

const App = () => (
  <div className="App">
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <Routes>
            <Route path="/books" element={<BooksPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ShoppingCart />
    </CartProvider>
  </div>
);

export default App;
