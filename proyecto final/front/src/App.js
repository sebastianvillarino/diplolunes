import { BrowserRouter, Routes, Route } from 'react-router-dom';



import './App.css';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Homepage from "./pages/ Homepage";
import Quienessomos from "./pages/ Quienessomes";
import Servicios from "./pages/ Servicios";
import Novedades from "./pages/ Novedades";
import Contacto from "./pages/ Contacto";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='Homepage' element={<Homepage />} />
          <Route path='Quienessomos' element={<Quienessomos />} />
          <Route path='Servicios' element={<Servicios />} />
          <Route path='Novedades' element={<Novedades />} />
          <Route path='ContactoC' element={<Contacto />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
