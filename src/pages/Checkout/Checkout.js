import React, {Fragment, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Redirect } from 'react-router'
import { taiKhoan } from '../../configs/setting'
import { layThongTinPhongVeAction } from '../../redux/action/phimActions'
import './Checkout.css'

export default function Checkout(props) {

    const {thongTinPhongVe} = useSelector(state => state.PhimReducer) 

    const {danhSachGheDangDat} = useSelector(state => state.QuanLyDatVeReducer)

    const dispatch = useDispatch()

    useEffect(() => {

        let {id} = props.match.params;

        dispatch(layThongTinPhongVeAction(id))
    },[])
    // console.log(thongTinPhongVe)

    const renderGheDangDat = () => {
        return danhSachGheDangDat.map((gheDangDat,index) => {
            return <Fragment key={index}>
                <span className='text-success font-weight-bold' style={{fontSize:23}}>{gheDangDat.stt} </span>
            </Fragment>
        })
    }

    const renderGhe = () => {
        return thongTinPhongVe.danhSachGhe?.map((ghe,index) => {

            // Xác định ghế đang đặt
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            let classGheDangDat = indexGheDD !== -1 ? 'gheDangDat' : '';

            // Xác định đã đặt và chưa đặt
            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            
            return <Fragment key={index}>
                <button className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat} m-1`} style={{width:'40px',height:'40px'}}
                disabled={ghe.daDat}
                onClick={() => {
                    dispatch({
                        type: 'DAT_GHE',
                        ghe
                    })
                }}>
                    {ghe.daDat === true ? 'X' : ghe.stt}
                    </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    const tinhTongTien = () => {
        return danhSachGheDangDat.reduce((tongTien,gheDangDat,index) => {
            return tongTien += gheDangDat.giaVe;
        },0)
    }

    if(!localStorage.getItem(taiKhoan)) {
        return <Redirect to='/login'/>
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8 text-center mt-5 px-5'>
                    <img className='logo w-100' src='http://tix.vn/app/assets/img/icons/screen.png'/>
                    {renderGhe()}
                </div>
                <div className='col-4'>
                    <div className='text-center display-4 text-success'>
                        {tinhTongTien().toLocaleString()} VNĐ
                    </div>
                    <hr/>
                    <img className='w-100 my-3' src={thongTinPhongVe.thongTinPhim?.hinhAnh}/>
                    <h3>Tên phim: {thongTinPhongVe.thongTinPhim?.tenPhim}</h3>
                    <div>Địa chỉ: {thongTinPhongVe.thongTinPhim?.diaChi}</div>
                    <div>Ngày giờ chiếu: </div>
                    <hr/>
                    <h3 className='text-warning text-left'>
                        Ghế: {renderGheDangDat()}
                        <hr/>
                    </h3>
                    <div>
                        <button className='btn btn-danger w-100 display-4'>Đặt vé</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
