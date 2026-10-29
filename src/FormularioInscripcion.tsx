import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import InputField from './InputField';
import BotonSubmit from './BotonSubmit';
import './FormularioInscripcion.css';

const FormularioInscripcion = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState(false);

  useEffect(() => {
    if (mensajeExito) {
      document.title = '✓ Inscripción Exitosa';
    } else {
      document.title = 'Sistema de Inscripción';
    }
  }, [mensajeExito]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      email.trim() === '' ||
      telefono.trim() === ''
    ) {
      alert('Por favor, completa todos los campos');
      return;
    }

    setMensajeExito(true);
  };

  const handleReset = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setMensajeExito(false);
  };

  if (mensajeExito) {
    return (
      <div className="confirmacion">
        <h2>✓ ¡Inscripción exitosa!</h2>
        <p>Nombre completo: {nombre} {apellido}</p>
        <p>Email: {email}</p>
        <p>Teléfono: {telefono}</p>
        <BotonSubmit texto="Nueva Inscripción" onClick={handleReset} />
      </div>
    );
  }

  return (
    <form className="formulario">
      <InputField
        label="Nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <InputField
        label="Apellido"
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Ingresa tu apellido"
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ejemplo@email.com"
      />
      <InputField
        label="Teléfono"
        type="tel"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        placeholder="1234567890"
      />
      <BotonSubmit texto="Enviar" onClick={handleSubmit} />
    </form>
  );
};

export default FormularioInscripcion;