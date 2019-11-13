import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    const { cartItems } = this.state;
    cartItems.push(item);

    this.setState({
      cartItems: cartItems
    });
  }

  render() {
    const { cartItems } = this.state;
    const addToCart = this.addToCart;
    return (
      <CartContext.Provider value={{cartItems, addToCart}}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
