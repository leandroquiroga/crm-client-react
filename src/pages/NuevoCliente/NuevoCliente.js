import React from 'react'
import { Formulario } from '../../components/Formulario'

export const NuevoCliente = () => {
  return (
    <section>
      <h1 className='font-black text-2xl text-gray-900'> Nuevo Cliente</h1>
      <p className='text-gray-900 mt-2'> Llena los siguientes campos para agregar un nuevo cliente</p>
    
      <Formulario/>
    </section>
  )
}