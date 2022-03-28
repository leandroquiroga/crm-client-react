import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';

export const Layout = () => {

  const location = useLocation();

  const { pathname } = location;

  return (
    <div className='lg:flex md:min-h-screen'>

      <aside className='lg:w-1/4 bg-gray-900 px-5 py-10'>
        <h2 className='text-xl text-center text-white mb-9'> CRM - Clientes</h2>
        <Link
          to='/clientes'
          className={`${pathname === '/clientes'
                          ? 'text-gray-400'
                          : 'text-white'} text-center cursor-pointer block my-1 hover:text-gray-300 transition-all`}
        >
          Clientes 
        </Link>
        <Link
          to='/clientes/nuevocliente'
          className={`${pathname === '/clientes/nuevocliente'
                          ? 'text-gray-400'
                          : 'text-white'} text-center cursor-pointer block my-1 hover:text-gray-300 transition-all`}
        >
          Añadir Cliente
        </Link>
      </aside>

      <main className='lg:w-3/4 p-10 lg:h-screen lg:overflow-y-scroll overflow-y-hidden'>
        <Outlet/>  
      </main>

      
    </div>
  )
}