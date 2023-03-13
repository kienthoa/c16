import React, {useState, useEffect} from 'react'
import {connect,useSelector,useDispatch} from 'react-redux'
import { layDanhSachPhimAction } from '../../redux/action/phimActions';


export default function ReduxHookHome(props) {
    // useSelector là hook để lấy dữ liệu từ reducer về
    const mangPhim = useSelector(state => state.PhimReducer.mangPhim)

    // useDispatch tương tự this.props.dipatch
    const dispatch = useDispatch();

    const renderPhim = () => {
        return mangPhim.map((item, index) => {
            return <div className="col-4 my-3" key={index}>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={item.hinhAnh} alt={item.tenPhim} width={150} height={200} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <h4 className="card-title">Đặt vé</h4>
                    </div>
                </div>
            </div>

        })
    }

    // useEffect phải đặt trước return,
    // Nhận vào 2 tham số:
    // + Tham số 1: Là hàm chạy sau khi component render
    // + Tham số 2: Chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
    // Ghi chú:
    // Nếu không có tham số 2 thì nó sẽ render vô tận
    // 1 component có thể gọi nhiều useEffect
    useEffect(() => {
        // DidMount and DidUpdate (tức tham số 2)
        dispatch(layDanhSachPhimAction())

        return () => {
            // WillUnmount
            // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
        }
    },[])

    return (
        <div className='container mt-5'>
            <button onClick = {() => {
                
            }}>Lấy danh sách phim</button>
            <div className='display-4 text-center'>
                Danh sách phim
            </div>
            <div className='row'>
                {renderPhim()}
            </div>
        </div>
    )
}

// Xoá
// const mapStateToProps = (state) => {
//     return {
//         mangPhim: state.PhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps,null) (ReduxHookHome)