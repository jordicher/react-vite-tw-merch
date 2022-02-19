import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import AppContext from '../context/AppContext'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    apto: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    cp: yup.string().required(),
    phone: yup.string().required()
  })
  .required()

const formFields = [
  {
    name: 'name',
    placeholder: 'Nombre'
  },
  {
    name: 'email',
    placeholder: 'Correo electrónico'
  },
  {
    name: 'address',
    placeholder: 'Dirección'
  },
  {
    name: 'apto',
    placeholder: 'Apto'
  },
  {
    name: 'city',
    placeholder: 'Ciudad'
  },
  {
    name: 'state',
    placeholder: 'Estado'
  },
  {
    name: 'country',
    placeholder: 'Estado'
  },
  {
    name: 'cp',
    placeholder: 'Código postal'
  },
  {
    name: 'phone',
    placeholder: 'Teléfono'
  }
]

function Information() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const {
    state: { cart },
    addToBuyer
  } = useContext(AppContext)

  const onSubmit = data => {
    addToBuyer(data)
    navigate('/checkout/payment', { replace: true })
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <h2 className="font-bold text-2xl py-2">Información de contacto:</h2>

        <form
          className="flex flex-col space-y-3"
          onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(({ name, placeholder }) => (
            <>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={placeholder}
                {...register(name)}
              />
              {errors[name] && (
                <p className="text-red-600 pb-1 px-3 leading-4">
                  {errors[name].message}
                </p>
              )}
            </>
          ))}

          <div className="flex justify-between">
            <Link to="/checkout">
              <button type="button">Regresar</button>
            </Link>
            <button type="submit">pagar</button>
          </div>
        </form>
      </div>
      <div className="col-span-12 md:col-span-4">
        <h3 className="font-bol">Pedido:</h3>
        {cart.map(item => (
          <div className="flex justify-between" key={item.title}>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}

        <div className="flex justify-between">
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  )
}

export default Information
