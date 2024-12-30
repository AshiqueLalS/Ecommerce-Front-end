import React from 'react'
import useFetch from '../../hooks/useFetch'

function Cart() {

    const [cartDetails, isLoading , error] = useFetch("/carts/get-cart-details")
  return (
    <div>Cart</div>
  )
}

export default Cart