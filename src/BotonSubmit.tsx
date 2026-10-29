import type { FormEvent } from 'react';
import './BotonSubmit.css';

interface BotonSubmitProps {
  texto: string;
  onClick: (e: FormEvent) => void;
}

const BotonSubmit = ({ texto, onClick }: BotonSubmitProps) => {
  return (
    <button type="submit" className="boton-submit" onClick={onClick}>
      {texto}
    </button>
  );
};

export default BotonSubmit;