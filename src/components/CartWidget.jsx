import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
  const [itemCount, setItemCount] = useState(0);

  // Lógica para actualizar itemCount cuando se agregan o eliminan productos

  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-cart"></i>
      <span className="ms-2 text-white">{itemCount}</span>
    </div>
  );
};

export default CartWidget;

