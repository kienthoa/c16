import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

        const {taiKhoan} = useSelector(state => state.NguoiDungReducer)    
    
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="/home">CyberSoft</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                {taiKhoan !== '' ? <span className='nav-link'>{taiKhoan}</span> : <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/login">Login</NavLink>}
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/lifecycle">Lifecycle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/details">Details</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/usestatedemo" >UseState Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/useeffecthome" >UseEffect Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/usecallback" >UseCallBack Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/usememo" >UseMemo Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/useref" >UseRef Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/reduxhookhome" >Redux Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/demoprops" >Props Component</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/btchonxe" >Demo ChonXe</NavLink>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

        )

}
