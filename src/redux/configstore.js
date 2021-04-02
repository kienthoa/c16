import {applyMiddleware, combineReducers, createStore} from 'redux';
import {PhimReducer} from './reducers/PhimReducer'
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './reducers/LoadingReducer';
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';
import { NguoiDungReducer } from './reducers/NguoiDungReducer';

const rootReducer = combineReducers({
    PhimReducer:PhimReducer,
    LoadingReducer: LoadingReducer,
    QuanLyDatVeReducer:QuanLyDatVeReducer,
    NguoiDungReducer:NguoiDungReducer
})

// apply thunk để xử lý dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk))