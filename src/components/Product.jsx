import PropTypes from 'prop-types'
import React from 'react'

function Product({ product }) {
  return (
    <article className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <img
        className="object-cover object-center w-full h-48 block"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-4">
        <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.title}
        </h2>
        <p className="text-gray-900 title-font text-lg font-medium">
          {product.description}
        </p>
        <p className="mt-1">{product.price} €</p>
      </div>
      <button
        className="w-full text-2xl bg-green-400 rounded-b-sm"
        type="button">
        Comprar
      </button>
    </article>
  )
}

export default Product

Product.propTypes = { product: PropTypes.object.isRequired }
