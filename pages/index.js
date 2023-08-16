// pages/index.js
import React from 'react';
import Link from 'next/link';
import { paths } from '../src/routes/paths'; // Ajusta la ruta de importación

const HomePage = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link href={paths.login}>Iniciar Sesión</Link>
    </div>
  );
};

export default HomePage;
    