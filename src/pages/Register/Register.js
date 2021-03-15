import React, { Component } from 'react'

export default class Register extends Component {

    state = {
        values: {
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            nameUser: ''
        },
        errors: {
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            nameUser: ''
        }
    }
    

    handleChange = (event) => {
        const {value,name} = event.target;
        
        let newValues = {...this.state.values};
        newValues[name] = value;

        let newErrors = {...this.state.errors};
        let errors = '';
        if(value === ''){
            errors = name + ' không được bỏ trống'
        }
        newErrors[name] = errors;

        this.setState({
            values: newValues,
            errors: newErrors
        })
        // this.setState({
        //     [name]:value
        // }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
        // Chặn sự kiện reload của browser
        event.preventDefault();
        let valid = true;
        // Lỗi khi valid không hợp lệ
        // + Khi bất kig thuộc tính nào của errors != '' => bị lỗi
        for(let keyError in this.state.errors){
            if(this.state.errors[keyError] !== ''){
                valid = false;
            }
        }
        // Hoặc + Bất kì thuộc tính nào của value = ''
        for(let keyValue in this.state.values){
            if(this.state.values[keyValue] === ''){
                valid = false;
            }
        }

        if(!valid) {
            alert('Dữ liệu không hợp lệ')
            return ;
        }
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className='display-4 text-center'>Sign up</div>
                <div className="form-group">
                    <p>Username</p>
                    <input name="username" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger font-italic">{this.state.errors.username}</p>
                </div>
                <div className="form-group">
                    <p>Name</p>
                    <input name="nameUser" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger font-italic">{this.state.errors.nameUser}</p>
                </div>
                <div className="form-group">
                    <p>Password</p>
                    <input name="password" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger font-italic">{this.state.errors.password}</p>
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input name="email" className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <p>Phone nummber</p>
                    <input name="phoneNumber" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger font-italic">{this.state.errors.phoneNumber}</p>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Sign up</button>
                </div>
            </form>
        )
    }
}
