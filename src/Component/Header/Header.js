import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
          <section>
          <nav class="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand ml-5" href="link">Dream League</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
            <li class="nav-item ">
                <Link class="nav-link text-white " to="/home">Home </Link>
            </li>
            <li class="nav-item ">
                <Link class="nav-link text-white " to="/club">Club </Link>
            </li>
            
            <li class="nav-item">
                <Link class="nav-link text-white" to="/teamId/:idTeam">Club Details</Link>
            </li>
          
            <li class="nav-item dropdown">
                <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Top Player
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="link">Messi</a>
                <a class="dropdown-item" href="link">Cristin Ronaldo</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="link">Neymar</a>
                </div>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
        
          </section>
        </>
    );
};

export default Header;