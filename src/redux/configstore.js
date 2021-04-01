import {applyMiddleware, combineReducers, createStore} from 'redux';
import {PhimReducer} from './reducers/PhimReducer'
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './reducers/LoadingReducer';
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';

const rootReducer = combineReducers({
    PhimReducer:PhimReducer,
    LoadingReducer: LoadingReducer,
    QuanLyDatVeReducer:QuanLyDatVeReducer
})

// apply thunk để xử lý dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk))