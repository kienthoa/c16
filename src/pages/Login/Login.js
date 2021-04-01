import React from 'react'

export default function Login() {

    const handleChange = () => {
        
    }

    return (
        <form className='container'>
                <h3>Đăng nhập</h3>
                <div className='form-group'>
                    <p>Tài khoản</p>
                    <input className='form-control' name='taiKhoan' onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <p>Mật khẩu</p>
                    <input className='form-control' name='password' onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>Đăng nhập</button>
                </div>
            </form>
    )
}
