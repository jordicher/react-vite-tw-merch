import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

function Header() {
  const {
    state: { cart }
  } = useContext(AppContext)
  return (
    <header className="flex justify-between mb-5">
      <Link to="/">
        <h1 className="text-3xl font-bold">JordiCher Merch</h1>
      </Link>
      <div className="flex flex-row">
        <Link to="/checkout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
        {cart.length > 0 && (
          <div className="my-auto font-bold">{cart.length} </div>
        )}
      </div>
    </header>
  )
}

export default Header