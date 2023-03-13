import React,{useState} from 'react'

// Hook chỉ sử dụng cho rfc (react function component)
export default function UseStateHook() {

    let [state,setState] = useState({
        number:1
    }); 
    let [number,setNumber] = useState(0)
    // useState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState 

    return (
        <div className="container">
            <h1>{state.number} - {number}</h1>
            <button className="btn btn-primary" onClick={() => {
                setState({
                    number : state.number + 1
                })
                setNumber(number+1)
            }}>
                Click!
            </button>
        </div>
    )
}
