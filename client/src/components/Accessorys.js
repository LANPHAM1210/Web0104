import React from 'react'
import { AccessoryData } from '../fakedata'
import Accessory from './Accessory'

function Accessorys() {
    return (
        <div style={{marginTop:'40px'}}>
            <h3 style={{fontFamily:'arial', fontWeight:'200'}}>Phụ kiện hot</h3>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {AccessoryData.map((item, idx) => (
                    <Accessory img={item.img} text={item.text} key={idx}/>
                ))}
            </div>
        </div>
    )
}

export default Accessorys