import React from 'react'
import ButtonPlusMinus from './ButtonPlusMinus';

function CartModal({closeModal, cartItemModal, updateQuantity, deleteItem}) {
  const modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)',
  };
  
  
  let totalPrice = cartItemModal.reduce(function (price, product) {
    return price + product.quantity * product.price;
  }, 0);
  return (
    <section className="h-100 h-custom modal show fade" style={modalStyle}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: 15 }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Giỏ Hàng</h1>
                        <h6 className="mb-0 text-muted">{cartItemModal.length} item</h6>
                      </div>
                      <hr className="my-4" />
                      {cartItemModal.map((e,i) => (
                        <div key={i} className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={e.image}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h3 className="text-black mt-3 mb-3">{e.productName}</h3>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <ButtonPlusMinus item={e} updateQuantity1={updateQuantity}/>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">${e.price}</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <button onClick={() => deleteItem(e)} type='button' className="btn btn-outline-danger">
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      ))}
                      
                     
                    </div>
                    <hr className="my-4" />
                      <div className="pt-5">
                      <button onClick={closeModal} type="button" className="btn btn-danger " style={{width:"150px", height:"50px", fontSize:"18px", marginBottom:"50px"}}>CLOSE</button>
                      </div>
                  </div>
                  <div className="col-lg-4" style={{backgroundColor: "Silver"}}>
                    <div className="p-5">
                      <h1 className="fw-bold mb-5">Thanh Toán</h1>
                      <hr className="my-4" />
                      {cartItemModal.map((e,i) => (
                        <div key={i} className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">{e.productName}</h5>
                          <h5>${(e.price)* (e.quantity)}</h5>
                        </div>
                      )) }
                      
                      
                      <hr className="my-4" />
                      
                      <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Tổng</h5>
                          <h5>${totalPrice}</h5>
                      </div>
                      
                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Đặt hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartModal