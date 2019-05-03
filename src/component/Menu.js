import React, { Component } from 'react';
class Menu extends Component {
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Product</a>
                        </li>
                        <li>
                            <a>Address</a>
                        </li>
                        <li>
                            <a>Category</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Menu;