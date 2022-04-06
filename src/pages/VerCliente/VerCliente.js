import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import clientsAxios from '../../config/axios';

export const VerCliente = () => {
  
  const idParams = useParams();
  const navigate = useNavigate();

  // arrayClients contiene todos los clientes recibidos de nuestra API
  const [client, setClient] = useState({});

  // Controla si carga o no el componente
  const [loading, setLoading] = useState(true);

  // Regresa a la url Clientes
  const handleBack = () => navigate('/clientes', { replace: true });
  
  // Realizamos la peticion a nuestra API 
  useEffect(() => {
    const clientsFetchApi = async () => {
      clientsAxios.get(`/clientes/${idParams.id}`)
        .then((response) => {
          const data = response.data
          setClient(data);
        })
        .catch(error => {
          handleBack()
          // Mensaje de error: Cliente solicitado no existe
          console.log(error)
        });
      
      setLoading(!loading);
    };
    clientsFetchApi();
  }, []);
  
  const { name, empresa, email, phone, notes } = client;


  return (
    (loading) 
      ? <Spinner />
      : (Object.keys(client).length === 0)
        ? <Spinner />
        :
          (
            <div className='bg-slate-50 border-2 p-2 rounded-md shadow-lg flex flex-col justify-center items-center w-11/12 sm:w-96 sm:mx-auto'>
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
        
              <div className='my-1'>
                <p className='text-base text-center'>Nota:</p>
                <span className='font-normal text-center'> {notes} </span>
              </div>
        
              <div className='w-full mt-4'>
                <button 
                  type='button'
                  onClick={handleBack}
                  className='bg-gray-900 w-full rounded-lg p-2 cursor-pointer text-white hover:bg-gray-700 hover:transition-all'
                  >
                    Regresar 
                </button>
              </div>
            </div>
          )
  )
}
