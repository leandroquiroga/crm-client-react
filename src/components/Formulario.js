import React from 'react'
import { useNavigate } from 'react-router-dom'
import clientsAxios from '../config/axios';
import { Alert } from './Alert';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const Formulario = ({client, title}) => {

  const navigate = useNavigate();

  // Envias los datos al servidor
  const handleSubmit = async (values) => {
    try {
      // Si existe el cliente edita el contenido, en caso contrario lo agrega
      (client.id)
        ? clientsAxios.put(`/clientes/${client.id}`, values)
        : clientsAxios.post('/clientes', values);
      navigate('/clientes');
    } catch (error) {
        console.log(error)
    }
  }
  // Controla los errores del formulario
  const errorForm = (error, touched) => (
    (error && touched) && <Alert> { error } </Alert>
  )

  // Creamos el schema del cliente
  const newSchemaClient = Yup.object().shape({
    name: Yup.string()
              .min(3, 'Debe contener minimo 3 caracteres')
              .required('Nombre es requerido'),
    empresa: Yup.string()
              .min(3, 'Debe contener minimo 3 caracteres')
              .required('Empresa es requerida'),
    email: Yup.string()
              .email( 'Debe ser un email valido')
              .required('Email es requerido'),
    phone: Yup.number().typeError('Numero no valido')
              .positive('Numero no valido')
              .integer('Numero no valido')
              .min(8, 'Debe tener como minimo 8 digitos'),
    notes: Yup.string()
              .min(25, 'Debe terner 25 caracteres')
              .required('Comentarios es requerido')
  });


  return (  

    <article className='my-5 px-5 py-10 bg-slate-50 rounded shadow-lg md:w-3/4 mx-auto'>
      <h1 className='text-gray-900 text-center uppercase font-bold'> {title} </h1>

      <Formik
        initialValues={{
          name: client?.name ?? '',
          empresa: client?.empresa ?? '',
          email: client?.email ?? '',
          phone: client?.phone ?? '',
          notes: client?.notes ?? '',
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newSchemaClient}
      >
        {({errors, touched}) => (
          <Form className='mt-9'>
            <label
              className='text-gray-700 font-bold'
              htmlFor='name'
            >
              Nombre:
            </label>
            <Field
              id='name'
              name='name'
              className="block w-full p-1 border-b-2 outline-none my-2"
              type='text'
              placeholder='Ingrese su nombre...'
            />
            {errorForm(errors.name, touched.name)}
            <label
              className='text-gray-700 font-bold'
              htmlFor='empresa'
            >
              Nombre de la Empresa:
            </label>
            <Field
              id='empresa'
              name='empresa'
              className="block w-full p-1 border-b-2 outline-none my-2"
              type='text'
              placeholder='Ingrese el nombre de la empresa...'
            />
            {errorForm(errors.empresa, touched.empresa)}
            <label
              className='text-gray-700 font-bold'
              htmlFor='email'
            >
              E-mail de la empresa:
            </label>
            <Field
              id='email'
              name='email'
              className="block w-full p-1 border-b-2 outline-none my-2"
              type='email'
              placeholder='Ingrese e-mail empresarial...'
            />
            {errorForm(errors.email, touched.email)}
            <label
              className='text-gray-700 font-bold'
              htmlFor='tel'
            >
              Telefono de la Empresa:
            </label>
            <Field
              id='tel'
              name='phone'
              className="block w-full p-1 border-b-2 outline-none my-2"
              type='tel'
              placeholder='Ingrese telefono empresarial...'
              minLength='8'
              maxLength='10'
            />
            {errorForm(errors.phone, touched.phone)}
            <label
              className='text-gray-700 font-bold'
              htmlFor='notes'
            >
              Comentarios:
            </label>
            <Field
              as='textarea'
              id='notes'
              name='notes'
              className="block w-full p-1 border-b-2 outline-none my-2 h-28"
              type='text'
              placeholder='Ingrese una nota adicional...'
              maxLength='150'

            />
            {errorForm(errors.notes, touched.notes)}
            <button
              type='submit'
              className='cursor-pointer bg-gray-900 p-3 text-white hover:bg-gray-700 transition ease-in-out delay-100 w-full rounded'
            >
              {title}
            </button>
          
          </Form>
        )}
      </Formik>
    </article>
  )
}

Formulario.defaultProps = {
  client: {},
  title: 'Agregar Cliente'
}