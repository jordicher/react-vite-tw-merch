import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9">
        <h3 className="font-bold">Lista de pedidos:</h3>
        <div className="flex justify-between">
          <h4>ITEM name</h4>
          <div className="flex justify-between">
            <span>10 € </span>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <aside className="col-span-12 md:col-span-3 text-center">
        <h3 className="font-bold">Precio total: 10</h3>
        <Link to="/checkout/information">
          <button type="button" className="bg-green-200 rounded p-3">
            Continuar pedido
          </button>
        </Link>
      </aside>
    </div>
  )
}

export default Checkout
