import PropTypes from 'prop-types'
import React from 'react'

function Product({ product }) {
  return (
    <article className="col-span-12 sm:col-span-6 md:col-span-4 border border-slate-400 rounded">
      <img
        className="h-48 object-contain w-full"
        src={product.image}
        alt={product.title}
      />
      <div>
        <h2 className="font-bold text-2xl">
          {product.title} <span>{product.price} €</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button
        className="w-full text-2xl bg-blue-400 rounded-b-sm"
        type="button">
        Comprar
      </button>
    </article>
  )
}

export default Product

Product.propTypes = { product: PropTypes.object.isRequired }
