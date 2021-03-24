import React, {useState, useRef} from 'react'

export default function UseRef() {

    let [number,setNumber] = useState(1);
    
    let messRef = useRef('');
    console.log({messRef});

    return (
        <div className='container mt-5'>
            Number: {number}
            <br/>
            <br/>
            <button className='btn btn-success' onClick={() => {
                setNumber(number+1);
                messRef.current = 'Dữ liệu đã được thay đổi';
            }}>
                Click!
            </button>
        </div>
    )
}
