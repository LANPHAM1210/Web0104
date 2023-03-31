import React from 'react'

function InfoDriveProduct({icon, title, des, bg}) {
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'10px', color:'white', background:bg, width:'350px', height:'50px'}}>
            <div style={{display:'flex', justifyContent:'flex-start', width:'100%', fontFamily:'arial'}}>
                <p>{icon}</p>
                <div style={{display:'flex', justifyContent:'flex-start', marginLeft:'10px', flexDirection:'column'}}>
                    <h4>{title}</h4>
                    <span>{des}</span>
                </div>
            </div>
        </div>
    )
}

export default InfoDriveProduct