import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
        <div className='register-center'>
            <div className='register-left'>
                <div className='register-bettwen'>
                    <img style={{marginRight:'13px'}} src='./Logo.png' alt='' width={100} height={100}/>
                    <p className='register-letter-1'>Smart</p>
                    <p className='register-letter-2'>phone</p>
                </div>
            </div>
            <div className='register-right'>
                <div className='register-right-center'>
                    <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                    <div className='dont-acc'>
                        <span style={{fontFamily:'arial', fontSize:'12px'}}>Bạn đã có tài khoản? </span>
                        <span style={{fontFamily:'arial', fontSize:'12px', color:'#1DB1D1', borderBottom:'1px solid', cursor:'pointer'}}> Đăng nhập tại đây </span>
                    </div>
                    <div className='register-content'>
                        <h4 className='register-ttcn'>THÔNG TIN CÁ NHÂN </h4>
                        <div className='register-form-input'>
                            <p>Họ</p>
                            <input className='register-input' type='text' placeholder='Họ' />
                        </div>
                        <div className='register-form-input'>
                            <p>Tên</p>
                            <input className='register-input' type='text' placeholder='Họ' />
                        </div>
                        <div className='register-form-input'>
                            <p>Email</p>
                            <input className='register-input' type='email' placeholder='Họ' />
                        </div>
                        <div className='register-form-input'>
                            <p>Mật khẩu</p>
                            <input className='register-input' type='password' placeholder='Họ' />
                        </div>
                        <Link to={'/login'}>
                        <button type='submit' style={{background:'green', border:'none', color:'white', padding:'3px 14px', cursor:'pointer', marginTop:'40px'}}>Đăng kí</button> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;