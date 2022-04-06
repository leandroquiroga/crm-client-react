import React from 'react'

export const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3.5'>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <p className='text-center font-bold'>Cargando</p>
    </div>
  )
}
