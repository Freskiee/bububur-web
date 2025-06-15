import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Sucursales from './pages/Sucursales';
import Franquicias from './pages/Franquicias';
import Contacto from './pages/Contacto';
import BolsaTrabajo from './pages/BolsaTrabajo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/franquicias" element={<Franquicias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/bolsa-trabajo" element={<BolsaTrabajo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;