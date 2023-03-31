import React from 'react'

function Accessory({img, text}) {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'33%', height:'120px', border:'1px solid black'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <img src={img} alt='' style={{width:'60px', height:'60px', objectFit:'contain'}} />
            <span>{text}</span>
        </div>
    </div>
  )
}

export default Accessory