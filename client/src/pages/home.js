import React from 'react'
import Header from '../components/Header';
import Products from '../components/Products';
import Sale from '../components/Sale';
import InfoDriveProducts from '../components/InfoDriveProducts';
import Accessorys from '../components/Accessorys';
import CartFooters from '../components/CartFooters';

function Home() {
  return (
    <div>
        <Header />
        <div style={{padding:'0 5%'}}>
            <Products />
            <Sale />
            <InfoDriveProducts />
            <Accessorys />
            <CartFooters />
        </div>
    </div>
  )
}

export default Home;