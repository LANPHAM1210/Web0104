import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
                      <div className='dont-acc-1'>
                          <span style={{fontFamily:'arial', fontSize:'12px'}}>Bạn chưa có tài khoản?</span>
                          <span style={{fontFamily:'arial', fontSize:'12px', color:'#1DB1D1', borderBottom:'1px solid', cursor:'pointer'}}>Đăng kí tại đây</span>
                      </div>
                      <div className='register-content'>
                          <div className='register-form-input'>
                              <p>Email</p>
                              <input className='register-input' type='email' placeholder='Họ' />
                          </div>
                          <div className='register-form-input'>
                              <p>Mật khẩu</p>
                              <input className='register-input' type='password' placeholder='Họ' />
                          </div>
                          <Link to={'/'}>
                            <button type='submit' style={{background:'green', border:'none', color:'white', padding:'3px 14px', cursor:'pointer', marginTop:'40px'}}>Đăng nhập</button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Login;