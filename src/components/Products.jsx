import PropTypes from 'prop-types'
import React from 'react'
import Product from './Product'

function Products({ products }) {
  return (
    <div className="flex flex-wrap -m-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products

Products.propTypes = { products: PropTypes.array.isRequired }
