import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {layDanhSachPhimAction} from '../../redux/action/phimActions'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    
    // state = {
    //     arrFilms: []
    // }

    loadFilm = () => {
        this.props.dispatch(layDanhSachPhimAction())
        // // Dùng axios gọi lấy thông tin từ backend về qua api
        // const promise = axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }); 
        // // Xử lý thành công
        // promise.then((result) => {
        //     console.log("resut: ", result.data);
        //     // Lấy dữ liệu về => dispatch lên reducer
        //     this.props.dispatch({
        //         type: 'LAY_DANH_SACH_PHIM',
        //         mangPhim:result.data
        //     })
        // })
        // // Xử lý lỗi
        // promise.catch((error) => {
        //     console.log("error: ", error.response.data);
        // })
    }

    renderFilms = () => {
        return this.props.mangPhim.map((item, index) => {
            return <div className="col-4 my-3" key={index}>
                    <div className="card text-white bg-dark">
                        <img className="card-img-top" src={item.hinhAnh} alt={item.tenPhim} width={150} height={200}/>
                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <NavLink className='btn btn-danger' to={`details/${item.maPhim}`}>
                                Đặt vé
                            </NavLink>
                        </div>
                    </div>
                    </div>

        })
    }

    render() {
        return (
            <div className="container">
                {/* <button onClick={() => {this.loadFilm()}}>Lấy danh sách phim</button> */}
                <div className="text-center display-4">Danh sách phim</div>
                <div className="row">
                    {this.renderFilms()}
                </div>
            </div>
        )
    }

    // Hàm giống hàm render của react component kế thừa nên có
    componentDidMount(){
        // Các API muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
        this.loadFilm();
    }

}

const mapStateToProps = (state) => {
    return {
        mangPhim: state.PhimReducer.mangPhim
    }
}

export default connect(mapStateToProps,null) (Home);