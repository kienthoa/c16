
const stateDefault = {
    mangPhim: [],
    chiTietPhim: {tenPhim:'default',heThongRapChieu:[]},
    thongTinPhongve: {}
}


export const PhimReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'LAY_DANH_SACH_PHIM': {
            state.mangPhim = [...action.mangPhim];
            return {...state}
        }
        case 'LAY_CHI_TIET_PHIM': {
            state.chiTietPhim = action.chiTietPhim;
            return {...state}
        }
        case 'LAY_THONG_TIN_PHONG_VE': {
            state.thongTinPhongve = action.thongTinPhongve;
            return {...state}
        }


        default: {
            return {...state}
        }
    }
}