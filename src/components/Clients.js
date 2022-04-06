import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Clients = ({
  name,
  empresa,
  email,
  phone,
  notes,
  id,
  handleDelete 
} ) => {

  const navigate = useNavigate();

  return (
    <div className='bg-slate-50 border-2 p-2  rounded-md shadow-lg flex flex-col justify-center items-center w-full'>
      <h2 className='text-xl border-b-2 text-center w-full'> {name} </h2>
      
      <div className='w-full my-1'>
        <p className='text-base text-center'>Empresa:</p>
        <div className=' flex justify-between'>
          <p className='text-base'>Nombre:</p>
          <span className='font-normal'> {empresa} </span>
        </div>
      </div>

      <div className='w-full my-1'>
        <p className='text-base text-center'>Contacto:</p>
        <div className=' flex justify-between'>
          <p className='text-base'>Email:</p>
          <span className='font-normal'> {email} </span>
        </div>
        <div className=' flex justify-between'>
          <p className='text-base'>Telefóno:</p>
          <span className='font-normal'> {phone} </span>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center my-1'>
        <p className='text-base text-center'>Nota:</p>
        <span className='font-normal text-center'> {notes} </span>
      </div>

      <div className='flex justify-center items-center w-full mt-4 flex-col'>
        <button 
          type='button'
          onClick={() => navigate(`/clientes/${id}`, { replace: true})}
          className='bg-gray-900 rounded-lg p-2 cursor-pointer w-full m-2 text-white hover:bg-gray-700 hover:transition-all'
        >
          Ver Cliente
        </button>
        <button 
          type='button'
          onClick={() => navigate(`/clientes/editarcliente/${id}`, {replace: true})}
          className='bg-gray-900 rounded-lg p-2 cursor-pointer w-full m-2 text-white hover:bg-gray-700 hover:transition-all'
        >
          Editar Cliente
        </button>
        <button 
          type='button'
          onClick={() => handleDelete(id, name)}
          className='bg-gray-900 rounded-lg p-2 cursor-pointer w-full m-2 text-white hover:bg-gray-700 hover:transition-all'
        >
          Eliminar Cliente
        </button>
      </div>
    </div>
  )
}
