import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './../layouts/Layout';
import { Inicio } from '../pages/Inicio/Inicio';
import { NuevoCliente } from './../pages/NuevoCliente/NuevoCliente';
import { EditarCliente } from './../pages/EditarCliente/EditarCliente';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio />} />
          <Route path='nuevocliente' element={<NuevoCliente />} />
          <Route path='editarcliente/:id' element={<EditarCliente />} />
        </Route>

        <Route
          path='/*'
          element={
            <main className='flex justify-center'>
              <p className='text-gray-800 text-2xl'>Lo siento ! No existe esta pagina </p>
            </main>
          }           
        />
      
      </Routes>
    </BrowserRouter>
  )
}