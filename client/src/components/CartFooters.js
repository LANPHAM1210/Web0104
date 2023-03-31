import React from 'react'
import { CartFooterData } from '../fakedata'
import CartFooter from './CartFooter'

function CartFooters() {
    return (
        <div style={{display:'flex', width:'100%', marginTop:'30px'}}>
            {CartFooterData.map((item, idx) => (
                <CartFooter key={idx} img={item.img} text1={item.text1} text2={item.text2}/>
            ))}
        </div>
    )
}

export default CartFooters