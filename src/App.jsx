import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart'
import Footer from './components/Footer';
import { useProducts } from './context/productContext';

const App = () => {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
