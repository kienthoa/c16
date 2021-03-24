import React, { Component } from 'react'
// Thẻ thay thế thẻ a trong routing của react router dom
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
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
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-dark text-light" className="nav-link" to="/login">Login</NavLink>
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
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/usestatedemo" >UseState Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/useeffecthome" >UseEffect Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/usecallback" >UseCallBack Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/usememo" >UseMemo Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/useref" >UseRef Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/reduxhookhome" >Redux Hook</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/demoprops" >Props Component</NavLink>
                                    <NavLink activeClassName="bg-dark text-light" class="dropdown-item" to="/btchonxe" >Demo ChonXe</NavLink>
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
}