import React from 'react'

function ButtonPlusMinus({item, updateQuantity1}) {
  return (
    <div>
        <button
            onClick={() => updateQuantity1(item.id, item.quantity - 1)}
            className="btn btn-link px-2"
        >
            <i className="fas fa-minus" />
        </button>
        <span style={{padding:"5px 5px", fontSize:"20px", textAlign:"center"}}>{item.quantity}</span>
        <button
            onClick={() => updateQuantity1(item.id, item.quantity + 1)}
            className="btn btn-link px-2"
        >
            <i className="fas fa-plus" />
        </button>
    </div>
  )
}

export default ButtonPlusMinus