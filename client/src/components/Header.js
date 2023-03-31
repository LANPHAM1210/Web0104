import React from 'react';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <div className='header-line-1'>
            <h5 style={{fontFamily:'arial', fontWeight:'100'}}>Chào mừng đến với thế giới smartphone với muôn ngàn ưu đãi</h5>
        </div>
        <div className='header-menu'>
            <Link to={'/'} className='link'>
                <div className='menu-logo link'>
                    <img style={{marginRight:'13px'}} src='./Logo.png' alt='' width={30} height={30}/>
                    <p className='header-letter-1 link'>Smart</p>
                    <p className='header-letter-2 link'>phone</p>
                </div>
            </Link>
            <Link to={'/'} className='link'>
                <h3 style={{color:'black', fontFamily:'arial', fontWeight:'200'}}>Trang chủ</h3>
            </Link>
            <h3 style={{fontFamily:'arial', fontWeight:'200'}}>Danh mục sản phẩm</h3>
            <h3 style={{fontFamily:'arial', fontWeight:'200'}}>Phụ kiện</h3>
            <div className='header-right'>
                <SearchOutlined style={{fontSize:'20px'}}/>
                <ShoppingCartOutlined style={{fontSize:'20px'}}/>
                <Link to={'/account'} className='link'>
                    <UserOutlined style={{color:'black', fontSize:'20px'}}/>
                </Link>
            </div>
        </div>
    </div>
  )
}
