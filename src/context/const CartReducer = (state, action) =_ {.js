const CartReducer = (state, action) => {
  let newCarts = []
  switch (action.type) {
    case 'ADD_TO_CART':
      newCarts = [...state.carts, action.id]
      localStorage.setItem('carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    case 'REMOVE_FROM_CART':
      newCarts = state.carts
      newCarts.splice(
        state.carts.findIndex((cartId) => cartId === action.id),
        1
      )
      localStorage.setItem('carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    default:
      break
  }
}

export default CartReducer

////////////////////////////////////////////////////

import React from 'react'

const CartContext = React.createContext()

export default CartContext

///////////////////////////////////////////////////


import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import CartContext from '../../contexts/CartContext'
import CartReducer from '../../reducers/Cart'
import './Layout.css'



const Layout = ({ children }) => {
// const CartContext = React.createContext()
  let carts = JSON.parse(localStorage.getItem('carts'))
  const [state, dispatch] = useReducer(CartReducer, {
    carts: carts || [],
  })
  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        dispatchCart: dispatch,
      }}
    >
      <div className="Layout">
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default Layout