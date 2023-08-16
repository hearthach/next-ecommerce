import React from 'react';
import { NextAuthProvider } from './NextAuthProvider';
import '../styles/globals.css'; // Importa tus estilos globales aquí

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
