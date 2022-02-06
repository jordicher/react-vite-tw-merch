import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Product from './Product'

function Products() {
  const {
    state: { products },
    addToCart
  } = useContext(AppContext)

  const handleAddToCart = product => {
    addToCart(product)
  }

  return (
    <div className="flex flex-wrap -m-4">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}

export default Products
