import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formulario } from './../../components/Formulario';
import clientsAxios from './../../config/axios';

export const EditarCliente = () => {

  const idParams = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({});
    // Realizamos la peticion a nuestra API 
  useEffect(() => {
    const clientsFetchApi = async () => {
      clientsAxios.get(`/clientes/${idParams.id}`)
        .then((response) => {
          const data = response.data
          setClient(data);
        })
        .catch(error => {
          navigate('/clientes', { replace: true })
          // Mensaje de error: Cliente solicitado no existe
          console.log(error)
        });
    };
    clientsFetchApi();
  }, []);

  return (
    <section>
      <h1 className='font-black text-2xl text-gray-900'> Editar Cliente</h1>
      <p className='text-gray-900 mt-2'> Llena los siguientes campos para editar el cliente</p>
      
      <Formulario
        client={client}
        title='Editar Cliente'
      />
    </section>

  )
}
