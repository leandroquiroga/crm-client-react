import React from 'react'

export const Alert = ({children}) => {
  return (
    <div className='bg-red-600 w-100 mb-3 p-1 text-white font-bold text-center'>
      {children}
    </div>
  )
}
