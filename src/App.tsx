import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DatosUsuario from './pages/DatosUsuario';
import RegistrarUsuario from './pages/RegistrarUsuario';
import RegistroPublico from './pages/RegistroPublico';
import Gracias from './pages/Gracias';

function App() {
  return (
    <Routes>
      {/* Redirige la raíz a /registro */}
      <Route path="/" element={<Navigate to="/registro" />} />

      {/* Rutas */}
      <Route path="/home" element={<Home />} />
      <Route path="/usuario" element={<DatosUsuario />} />
      <Route path="/registrar" element={<RegistrarUsuario />} />
      <Route path="/registro" element={<RegistroPublico />} />
      <Route path="/gracias" element={<Gracias />} />
    </Routes>
  );
}

export default App;
