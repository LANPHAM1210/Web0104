import { RedoOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';
import React from 'react';
import InfoDriveProduct from './InfoDriveProduct';

const infolist = [
    {
        icon: <ShoppingCartOutlined style={{fontSize:'30px'}}/>,
        title: 'GIAO HÀNG',
        des: 'Miễn phí toàn quốc',
        bg: 'rgba(224, 121, 26, 0.6)'
    },
    {
        icon: <ShoppingOutlined style={{fontSize:'30px'}}/>,
        title: 'THANH TOÁN',
        des: 'Khi nhận hàng',
        bg: 'rgba(24, 58, 233, 0.6)'
    },
    {
        icon: <RedoOutlined style={{fontSize:'30px'}}/>,
        title: 'ĐỔI TRẢ HÀNG',
        des: 'Lên đến 30 ngày',
        bg: 'rgba(173, 167, 167, 0.6)'
    },
]

function InfoDriveProducts() {
    return (
        <div style={{width:'100%', display:'flex', justifyContent:'space-between', height:'70px', marginTop:'70px'}}>
            {infolist.map((item,idx) => (
                <InfoDriveProduct key={idx} icon={item.icon} title={item.title} des={item.des} bg={item.bg}/>
            ))}
        </div>
    )
}

export default InfoDriveProducts