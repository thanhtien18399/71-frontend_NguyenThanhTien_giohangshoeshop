import React, { Component } from 'react'
import ProductItem from './ProductItem'
export class ProductList extends Component {
  renderProducts = () => {
    return this.props.prod.map((item) => {
        return (
            <div key={item.id} className='col-3'>
                <ProductItem 
                addToCart={this.props.addToCart}
                selectProduct={this.props.selectProduct} prod={item} />
            </div>)
    })

};
  render() {
    return (
      <div className='row'>
       
            {this.renderProducts()}
      </div>
    )
  }
}

export default ProductList