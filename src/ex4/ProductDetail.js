import React, { Component } from 'react'

export class ProductDetail extends Component {
  render() {
    const {name,image,description,quantity,price}= this.props.selectProduct;
    return (
      <div className='row'>
        <div className='col-4'>
            <img src={image} className='w-100'/>
        </div>
        <div className='col-8'>
          <h1 className='display-4'>Thông Tin</h1>
          <p>Name:{name}</p>
          <p>Price:{price}</p>
          <p>Description:{description}</p>
          <p>Stock: {quantity}</p>
        </div>
      </div>
    )
  }
}

export default ProductDetail