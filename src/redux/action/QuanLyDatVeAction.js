import axios from 'axios';
import { history } from '../../App';
import { accessToken } from '../../configs/setting';
import { layThongTinPhongVeAction } from './phimActions';

// Dữ liệu backend cần
// {
//     "maLichChieu": 0,
//     "danhSachVe": [
//       {
//         "maGhe": 0,
//         "giaVe": 0
//       }
//     ],
//     "taiKhoanNguoiDung": "string"
//   }
export const datVeAction = (thongTinDatVe) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: thongTinDatVe,
                headers: {Authorization : 'Bear ' + localStorage.getItem(accessToken)}
            })
            console.log('result',result);

            // 200: Call api thành công
            // 201: Dữ liệu đã được khởi tạo
            // 400: Dữ liệu yêu cầu không hợp lệ
            // 401: Không có quyền truy cập vào api
            // 403: Chưa có quyền truy cập vào api
            // 404: Tìm không thấy dữ liệu trên server
            // 500: Lỗi xảy ra trên server (có thể backend sai hoặc frontend sai)
            if(result.status === 200) {
                alert("Đặt vé thành công !");
                // history.push("/");
                history.push(`/checkout/${thongTinDatVe.maLichChieu}`);
                // Gọi lại action lấy thông tin phòng vé (đã xây dựng sẵn)
                dispatch(layThongTinPhongVeAction(thongTinDatVe.maLichChieu))
            }
        } catch (error) {
            console.log('error:',error)
        }
    }
}