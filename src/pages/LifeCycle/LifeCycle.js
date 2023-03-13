import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycle extends Component {

    constructor(props) { // Hàm tự động kích hoạt
        super(props);
        this.state = {
            number: 0,
            stateNumber: {
                number: 1
            }
        }
        console.log('contructor');
    }

    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps');
        return currentState;
    }

    // Chạy sau khi state hoặc props của component thay đổi và trước render
    shouldComponentUpdate(newProps,newState) {
        // Xử lý => return false giao diện không render lại, return true giao diện render lại (default)
        return true;
    }

    render() {
        console.log('render');
        return (
            <div>
                Lifecycle
                <h1>{this.state.stateNumber.number}</h1>
                <button className="btn btn-primary" onClick={() => {
                    // this.setState({
                    //     number: this.state.number + 1
                    // })
                    let newStateNumber = {...this.state.stateNumber};
                    newStateNumber.number +=1
                    this.setState({
                        stateNumber: newStateNumber
                    })
                }}>Click!
                </button>
                {this.state.stateNumber.number < 3? <ChildComponent stateNumber={this.state.stateNumber}/>:''}
            </div>
        )
    }

    // Lifecycle dùng để gọi api
    componentDidMount(){
        console.log('componentDidMount');
    }

    // componentDidupdate chạy kể từ lần thay đổi props hoặc state
    componentDidUpdate(prevProps,preState) { // Chạy mỗi lần setState hoặc props

        // Hạn chế setState trong component này (Muốn setState phải có điều kiện if)
        console.log('componentDidUpdate')
    }
}
