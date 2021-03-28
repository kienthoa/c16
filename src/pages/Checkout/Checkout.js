import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { layThongTinPhongVeAction } from '../../redux/action/phimActions'

export default function Checkout(props) {

    const {thongTinPhongVe} = useSelector(state => state.PhimReducer) 

    const dispatch = useDispatch()

    useEffect(() => {

        let {id} = props.match.params;

        dispatch(layThongTinPhongVeAction(id))
    },[])
    console.log(thongTinPhongVe)

    return (
        <div>
            
        </div>
    )
}
