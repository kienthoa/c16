import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { dangNhapAction } from '../../redux/action/NguoiDungAction';


export default function Login(props) {

    const dispatch = useDispatch();

    const {handleChange, handleSubmit, handleBlur, touched, errors,isValid} = useFormik ({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        validationSchema: yup.object().shape({
            // taiKhoan: yup.string().required('Tài khoản không được bỏ trống').min(6, 'Tài khoản tối thiếu 6 ký tự').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email không hợp lệ'),
            taiKhoan: yup.string().required('Tài khoản không được bỏ trống').min(3, 'Tài khoản tối thiếu 3 ký tự'),
            matKhau: yup.string().required('Mật khẩu không được bỏ trống')
        }),
        onSubmit: values => {
            console.log(values);
            // Gọi api hoặc action để đưa dữ liệu về server
            dispatch(dangNhapAction(values));
        }
    })

    return (
        <form className='container' onSubmit={handleSubmit}>
                <h3>Đăng nhập</h3>
                <div className='form-group'>
                    <p>Tài khoản</p>
                    <input className='form-control' name='taiKhoan' onChange={handleChange} onBlur={handleBlur}/>
                    {errors.taiKhoan && touched.taiKhoan ? <p className='text-danger font-italic'>{errors.taiKhoan}</p>:''}
                </div>
                <div className='form-group'>
                    <p>Mật khẩu</p>
                    <input className='form-control' name='matKhau' onChange={handleChange} onBlur={handleBlur}/>
                    {errors.matKhau && touched.matKhau ? <p className='text-danger font-italic'>{errors.matKhau}</p>:''}
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary' disabled={!isValid}>Đăng nhập</button>
                </div>
            </form>
    )
}
