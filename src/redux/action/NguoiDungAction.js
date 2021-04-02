import axios from 'axios';
import { accessToken, domain, taiKhoan } from '../../configs/setting';

export const dangNhapAction = (nguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: nguoiDung
            });

            // Lấy giá trị api về lưu vào localstorage
            console.log('result',result);            
            localStorage.setItem(accessToken,result.data.accessToken);
            localStorage.setItem(taiKhoan,JSON.stringify(result.data));   
            
            // Đăng nhập thành công chuyển hướng về home
            history.push('/'); // history.push nhận vào pathname => di chuyển đến trang component tương ứng

            dispatch({
                type:'DANG_NHAP',
                taiKhoan: result.data.taiKhoan
            })
        } catch (error) {
            console.log('errors',error);
        }
    }
}