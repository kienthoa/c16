import axios from 'axios';

export const layDanhSachPhimAction = () => {
    
    return async (dispatch) => {

        // Gọi action loading open
        dispatch({
            type:'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08',
                method: 'GET'
            }) 
    
            // sau khi lấy dữ liệu từ api về sử dụng hàm dispatch của redux thunk để đưa dữ liệu lên server
            dispatch({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim: result.data
            })
    
            // Tắt loading
            dispatch({
                type:'closeLoading'
            })
        },1000)
    }
}

export const layThongTinChiTietPhimAction = (maPhim) => {

    return async (dispatch) => {

        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'GET'
            })

            // Sau khi lấy dữ liệu từ api chúng ta sẽ đưa dữ liệu lên reducer = dispatch
            dispatch({
                type: 'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const layThongTinPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {

        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            }) 

            dispatch({
                type: 'LAY_THONG_TIN_PHONG_VE',
                thongTinPhongVe: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}