import React from "react";

function Cart({ cart = [], onRemove }) {
  // Ensure cart is always an array
  const safeCart = Array.isArray(cart) ? cart : [];

  // Calculate total
  const total = safeCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Your Shopping Cart</h2>

      {safeCart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <div className="cart-list">
            {safeCart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <button onClick={() => onRemove(item)}>❌ Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: <span className="total-price">₹{total}</span></h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
