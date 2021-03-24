import React from 'react'
import ChildComponent from './ChildComponent'
import Home from '../Home/Home'

export default function ParentComponent() {
    return (
        <div>
            <ChildComponent>
                <div className="text-center text-danger">Dữ liệu lấy từ Home</div>
                <Home/>
            </ChildComponent>
        </div>
    )
}
