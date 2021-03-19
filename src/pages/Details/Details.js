import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { layThongTinChiTietPhimAction } from '../../redux/action/phimActions'

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

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img className='w-100' src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim}/>
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
        </div>
    )
}
