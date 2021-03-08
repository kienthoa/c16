import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    
    state = {
        arrFilms: []
    }

    loadFilm = () => {

        // Dùng axios gọi lấy thông tin từ backend về qua api
        const promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        }); 
        // Xử lý thành công
        promise.then((result) => {
            console.log("resut: ", result.data);
            this.setState({
                arrFilms: result.data
            })
        })
        // Xử lý lỗi
        promise.catch((error) => {
            console.log("error: ", error.response.data);
        })
    }

    renderFilms = () => {
        return this.state.arrFilms.map((item, index) => {
            return <div className="col-4 my-3" key={index}>
                    <div className="card text-white bg-dark">
                        <img className="card-img-top" src={item.hinhAnh} alt={item.tenPhim} width={150} height={200}/>
                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <p className="card-text" />
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
