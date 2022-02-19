import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'

function Payment() {
  const navigate = useNavigate()

  const {
    state: { cart, buyer },
    addNewOrder
  } = useContext(AppContext)

  const paypalOtions = {
    clientId: import.meta.env.CLIENT_ID_PAYPAL,
    intent: 'capture',
    currency: 'EUR'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = data => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success', { replace: true })
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div>
      <div>
        <h3 className="font-bold">Resumen del pedido:</h3>
        {cart.map(item => (
          <div key={item.id} className="flex flex-row space-x-5">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <div>
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Payment
/* access_token$sandbox$592rs4xjb2v2mhs9$9fa27a9618875ea844b9258396c7c551
 */
