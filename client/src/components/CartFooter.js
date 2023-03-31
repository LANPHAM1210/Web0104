import React from 'react'

function CartFooter({img, text1, text2}) {
    return (
        <div style={{display:'flex', justifyContent:'center', width:'25%',height:'230px', fontFamily:'arial'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'90%', height:'90%', textAlign:'center', flexDirection:'column' }}>
                <img src={img} alt='' style={{marginBottom:'10px'}}/>
                <h4  style={{ marginTop:'10px'}}>{text1}</h4>
                <span style={{ marginTop:'20px'}}>{text2}</span>
            </div>
        </div>
    )
}

export default CartFooter