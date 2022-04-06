import React from 'react'
import { useNavigate } from 'react-router-dom';
import logoError from './../assets/ups_error.svg';


export const NoClient = () => {
  
  const navigate = useNavigate();

  const handleNavigate = () => navigate('/clientes/nuevocliente', { replace: true });
  
  return (
    <section className='flex flex-col justify-center items-center'>
        
      <div className='p-2'>
        <img 
          alt='logo error'
          src={logoError}
          className='w-64 rounded'
        />
      </div>
      <p className='font-bold text-center text-xl'>No se han encotrado ningun cliente</p>
      <button
        className='w-40 bg-gray-900 p-2 mt-4 cursor-pointer rounded text-white hover:bg-gray-700 hover:transition-all'
        onClick={handleNavigate}
      >
        Agregar cliente
      </button>
      
    </section>
  )
}
