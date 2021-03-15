import React, { Component, PureComponent} from 'react'

// PureComponent giống Component tuy nhiên PureComponent sẽ xét giá trị đầu vào của props có thay đổi hay không 
// => nếu có mới render lại
// shouldComponentUpdate không tồn tại trong PureComponent (vì PureComponent đã xử lý render tự động tương đương với lifecycle này)
export default class ChildComponent extends PureComponent {

    setInterval = {};
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }  
    
    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps child');
        return currentState;
    }

    // // Chạy sau khi state hoặc props của component thay đổi và trước render
    // shouldComponentUpdate(newProps,newState) {
    //     console.log('shouldComponentUpdate child')
    //     // Xử lý => return false giao diện không render lại, return true giao diện render lại (default)
    //     return true;
    // }

    render() {
        console.log('Đã render lại!')
        return (
            <div>
                Props Child: {this.props.stateNumber.number}
            </div>
        )
    }

    // Lifecycle dùng để gọi api
    componentDidMount(){
        console.log('componentDidMount child');

    }

    // componentDidupdate chạy kể từ lần thay đổi props hoặc state
    componentDidUpdate(prevProps,preState) { // Chạy mỗi lần setState hoặc props

        // Hạn chế setState trong component này (Muốn setState phải có điều kiện if)
        console.log('componentDidUpdate child')
        
        this.setInterval = setInterval(() => {
            console.log('object')
        },1000)
    }

    // Lifecycle chạy trước khi component mất khỏi giao diện
    componentWillUnmount() {
        clearInterval(this.setInterval);
    }
}
