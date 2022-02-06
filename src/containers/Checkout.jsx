import React from 'react'

const Checkout = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9">
        <h3 className="font-bold">Lista de pedidos:</h3>
        <div className="flex justify-between">
          <h4>ITEM name</h4>
          <div className="flex justify-between">
            <span>10 € </span>
            <button type="button">Eliminar</button>
          </div>
        </div>
      </div>

      <aside className="col-span-12 md:col-span-3 text-center">
        <h3 className="font-bold">Precio total: 10</h3>
        <button type="button" className="bg-blue-200 rounded p-3">
          Continuar pedido
        </button>
      </aside>
    </div>
  )
}

export default Checkout
