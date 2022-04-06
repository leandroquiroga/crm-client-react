import React, {useEffect, useState} from 'react'
import clientsAxios from '../../config/axios';

import { Clients } from '../../components/Clients';
import { NoClient } from '../../components/NoClient';

export const Inicio = () => {

  // arrayClients contiene todos los clientes recibidos de nuestra API
  const [arrayClients, setArrayClients] = useState([]);

  // Realizamos la peticion a nuestra API 
  useEffect(() => {
    const clientsFetchApi = async () => {
      clientsAxios.get('/clientes')
        .then((response) => {
          const data = response.data
          setArrayClients(data)
        })
        .catch(error => console.log(error))
    };

    clientsFetchApi();
  }, []);

  // Ejecuta la funcion de eliminar cliente
  const handleDelete = async (id, name) => {

    Swal.fire({
      title: `¿Desea eliminar el cliente ${name}?`,
      text: 'Una vez elimiando no se recuperará la información',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          `Eliminaste el cliente ${name}`,
          'success'
        )
        clientsAxios.delete(`/clientes/${id}`)
          .then(() => {
            const arrayClientNew = arrayClients.filter(client => client.id !== id);

            setArrayClients(arrayClientNew);
          })
          .catch(error => console.log(error))
      }
    })
  }
  return (
    <section>
      <h1 className='font-black text-2xl text-gray-900 lg:text-left text-center' >Clientes</h1>
      <p className='text-gray-900 mt-2 lg:text-left text-center' > Administra tus clientes </p>

      {
        (arrayClients.length !== 0)
          ? <article className=' my-5 grid grid-cols-cards gap-x-2 gap-y-2'>      
              {
                arrayClients.map(client => ( 
                  <Clients 
                    key={client.id}
                    {...client}
                    handleDelete={handleDelete}
                  />
                ))
              }
            </article>

          : <NoClient />
      }


    </section>
  )
}
