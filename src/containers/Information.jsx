import React from 'react'

function Information() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <h2 className="font-bold text-2xl py-2">Información de contacto:</h2>

        <form action="" className="flex flex-col space-y-3">
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Nombre completo"
            name="name"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Correo Electronico"
            name="email"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Direccion"
            name="addres"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="apto"
            name="apto"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Ciudad"
            name="city"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Pais"
            name="country"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Estado"
            name="state"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Codigo postal"
            name="cp"
          />
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            placeholder="Telefono"
            name="phone"
          />
        </form>

        <div className="flex justify-between">
          <div>Regresar</div>
          <div>pagar</div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <h3 className="font-bol">Pedido:</h3>

        <div className="flex justify-between">
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  )
}

export default Information
