import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { layThongTinChiTietPhimAction } from '../../redux/action/phimActions'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export default function Details(props) {
    
    const {chiTietPhim} = useSelector(state => state.PhimReducer)

    const dispatch = useDispatch()

    // Tự gọi api khi trang vừa load
    useEffect(() => {
        // Lấy tham số từ url
        let {id} = props.match.params;
        // Gọi action truyền  vào id phim
        dispatch(layThongTinChiTietPhimAction(id))
        
    }, [])
    // console.log(chiTietPhim)
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img className='w-100' src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} style={{height:300}}/>
                </div>
                <div className='col-6'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Tên phim</th>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <td>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis iusto odit, quod dolore nulla!
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            <div className="mt-5">
                <div className='row'>
                    <div className=" col-4 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {chiTietPhim.heThongRapChieu?.map((item,index) => {

                            let activeClass = index === 0 ? 'active' : '';

                            return <a key={index} className={`nav-link ${activeClass}`} id="v-pills-home-tab" data-toggle="pill" href={`#${item.maHeThongRap}`} role="tab" aria-controls={item.maHeThongRap} aria-selected="true">
                                <img className="mx-3" src={item.logo} width="50"/>
                                {item.tenHeThongRap}
                                </a>
                        })}
                    </div>
                    <div className="col-8 tab-content" id="v-pills-tabContent">
                        {chiTietPhim.heThongRapChieu?.map((item,index) => {
                            
                            let activeClass = index === 0 ? 'active' : '';

                            return <div key={index} className={`tab-pane fade show ${activeClass}`} id={item.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                
                                {/* Load cụm rạp chiếu từ heThongRap.cumRapChieu */}
                                {item.cumRapChieu?.map((cumRap,index) => {
                                    return <div key={index}>
                                        <h5>Cụm rạp: {cumRap.tenCumRap}</h5>
                                        <div className='row'>
                                            {cumRap.lichChieuPhim?.slice(0,8).map((lichChieu,index) => {
                                                return <span key={index} className='col-6 font-italic text-danger'>
                                                    Lịch chiếu: <NavLink to={`/checkout/${lichChieu.maLichChieu}`}>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                                </span>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>

                </div>
            </div>

 
        </div>
    )
}
