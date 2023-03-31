import React from 'react'
import CartProduct from './CartProduct'
import { ProductsData } from '../fakedata'

function Products() {
  return (
    <div className='product'>
        <h3 style={{fontFamily:'arial', fontWeight:'200'}}>Danh mục sản phẩm</h3>
        <div className='product-cnt'>
            {ProductsData.map((item,idx) => (
                <CartProduct bg={item.backgroundColor} key={idx} img={item.img} name={item.name} des={item.des}/>
            ))}
        </div>
    </div>
  )
}

export default Products