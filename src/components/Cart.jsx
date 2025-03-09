import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    const cartItems = useSelector((store)=> store.cart.items)
  return (
    <div className='text-center m-10 p-10 w-6/12 mx-auto'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div>
            <button className='p-2 m-2 bg-black text-white rounded-md'
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.lenght === 0 && <h1>Cart is empty Add Items to the cart</h1>}
            <ItemList items = {cartItems}></ItemList>
        </div>
    </div>
  )
}

export default Cart