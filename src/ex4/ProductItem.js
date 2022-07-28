import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    const {name,image,price}=this.props.prod;
    return (
      <div >
          <div className='card mb-4 p-3 ' style={{maxHeight:'400px',textAlign:"left"}}>
                <img src={image} className='w-100 d-block'/>
                <h6>{name}</h6>
                <h5>{price}$</h5>
                <div style={{height:'100px'}}>
                <button onClick={()=>{this.props.selectProduct(this.props.prod)}} className='btn btn-info me-3'>Detail</button>
                <button onClick={()=>{this.props.addToCart(this.props.prod)}} className='btn btn-dark'>Add To Card</button>
                </div>
                
            </div>
      </div>
    )
  }
}

export default ProductItem