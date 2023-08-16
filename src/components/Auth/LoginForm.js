import React, { useState } from 'react';
import axiosInstance from '../../services/api'; // Ajusta la ruta de importación
import { useRouter } from 'next/router';
import { endpoints } from '../../services/api'; // Ajusta la ruta de importación

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post(endpoints.login, {
        email,
        password,
      });

      // Lógica de manejo de respuesta y redirección al dashboard
      router.push('/dashboard');
    } catch (error) {
      // Manejo de errores
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Correo Electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
