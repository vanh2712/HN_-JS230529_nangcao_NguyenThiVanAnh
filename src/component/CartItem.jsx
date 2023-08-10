import React from 'react';
function CartItem({elementProduct, addToCart}) {
  return (
    
    <div > 
        <div>
            <img
            src={elementProduct.image}
            alt="Shopping item"
            className="img-fluid"
            style={{height:"280px", width: "220px"}}

            />
        </div>
        <div className="mt-2">
            <h5>{elementProduct.productName}</h5>
        </div>
        <div >
            <h5 className="mb-3">${elementProduct.price}</h5>
        </div>
        
        <button onClick={() => addToCart(elementProduct)} type="button" className="btn btn-danger shadow">
            Add To Cart
        </button>
    </div>
            
       
  )
}

export default CartItem