import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Singleproduct from './components/Singleproduct';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import { Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

function App() {

  return (
    <CookiesProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route path='/product/:id' element={<Singleproduct />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </CookiesProvider>
  );
}

export default App;
