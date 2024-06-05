import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './sections/Nav';
import Theme from './components/Theme';
import Footer from './sections/Footer';
import AperturaCierre from './pages/AperturaCierre';
import Cubierta from './pages/Cubierta';
import Iluminacion from './pages/Iluminacion';
import Fuerza from './pages/Fuerza';
import Tanque from './pages/Tanque';
import TableroBombas from './pages/TableroBombas';
import Identificacion from './pages/Identificacion';
import Operatividad from './pages/Operatividad';
import Incendio from './pages/Incendio';
import Matafuegos from './pages/Matafuegos';
import Salidas from './pages/Salidas';
import Energia from './pages/Energia';
import Agua from './pages/Agua';
import Aire from './pages/Aire';
import Persianas from './pages/Persianas';
import Recomendaciones from './pages/Recomendaciones';
import Manual from './pages/Manual';

// Importa tus componentes de página
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Nav />
      <Theme />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AperturaCierre" element={<AperturaCierre />} />
          <Route path="/Cubierta" element={<Cubierta />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/Iluminacion" element={<Iluminacion />} />
          <Route path="/Fuerza" element={<Fuerza />} />
          <Route path="/Tanque" element={<Tanque />} />
          <Route path="/TableroBombas" element={<TableroBombas />} />
          <Route path="/Identificacion" element={<Identificacion />} />
          <Route path="/Operatividad" element={<Operatividad />} />
          <Route path="/Incendio" element={<Incendio />} />
          <Route path="/Matafuegos" element={<Matafuegos />} />
          <Route path="/Salidas" element={<Salidas />} />
          <Route path="/Energia" element={<Energia />} />
          <Route path="/Agua" element={<Agua />} />
          <Route path="/Aire" element={<Aire />} />
          <Route path="/Persianas" element={<Persianas />} />
          <Route path="/Recomendaciones" element={<Recomendaciones />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

