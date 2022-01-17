import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Singleproduct from './components/Singleproduct';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route path='/product/:id' element={<Singleproduct />} />
      </Routes>
    </div>
  );
}

export default App;
