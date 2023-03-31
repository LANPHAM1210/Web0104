import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function CartProduct({img, name, des, bg}) {
  return (
    <div className='cartproduct' style={{background:bg}}>
        <div className='cartproduct-cnt'>
            <div style={{width:'100%', height:'300px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={img} alt='' style={{objectFit:'cover'}} width={'80%'} height={'100%'}/> 
            </div>
            <h4 style={{marginTop:'12px'}}>{name}</h4>
            <p style={{fontSize:'13px'}}>{des}</p>
        </div>
        <Link to={'/'} className='link'>
            <div style={{border:'1px solid black', width:"100px", background:'white'}}>
                <span style={{color:'black'}}>Xem ngay <ArrowRightOutlined /></span>
            </div>
        </Link>
    </div>
  )
}

export default CartProduct