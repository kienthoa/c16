import React from 'react'

export default function ChildComponent(props) {
    return (
        // props. children thường dùng để truyền component
        <div> 
            {props.children}
        </div>
    )
}
