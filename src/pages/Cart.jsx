import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  
  // Sample cart items - in a real app, this would come from context or props
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Notebook Set",
      price: 25.99,
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8gxsyfsYYM_2Cf5GNi4dp_ZnKUcvkY9oFA&s",
      category: "Stationery"
    },
    {
      id: 2,
      name: "Colorful Gel Pens (Pack of 10)",
      price: 12.50,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8gxsyfsYYM_2Cf5GNi4dp_ZnKUcvkY9oFA&s",
      category: "Writing"
    },
    {
      id: 3,
      name: "Mathematical Formulas Handbook",
      price: 35.00,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8gxsyfsYYM_2Cf5GNi4dp_ZnKUcvkY9oFA&s",
      category: "Books"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto">
          <div className="py-16 text-center">
            <div className="mb-6">
              <i className="text-6xl text-gray-300 fa-solid fa-shopping-cart"></i>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
            <p className="mb-8 text-gray-600">Looks like you haven't added any items to your cart yet.</p>
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Items ({cartItems.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center p-6 space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="object-cover w-20 h-20 rounded-lg"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mb-2 text-sm text-gray-600">{item.category}</p>
                      <div className="flex items-center space-x-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 transition-colors hover:text-gray-800 hover:bg-gray-50"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 border-gray-300 border-x bg-gray-50">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 transition-colors hover:text-gray-800 hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Price */}
                        <div className="text-lg font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 transition-colors hover:text-red-800"
                    >
                      <i className="text-lg fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <hr className="border-gray-200" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full py-3 mt-6 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={() => navigate('/')}
                className="w-full py-3 mt-3 font-semibold text-gray-800 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Continue Shopping
              </button>
              
              {subtotal > 50 && (
                <div className="p-3 mt-4 border border-green-200 rounded-md bg-green-50">
                  <p className="text-sm text-green-800">
                    🎉 You've qualified for free shipping!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;