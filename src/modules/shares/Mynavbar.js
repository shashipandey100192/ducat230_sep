import React from 'react';
import { Link } from 'react-router-dom';

function Mynavbar() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="pp">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="myabout">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="mycontactus">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="mygraph">graph</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="pp" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="pp">Action</Link></li>
                                            <li><Link className="dropdown-item" to="pp">Another action</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><Link className="dropdown-item" to="pp">Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Mynavbar