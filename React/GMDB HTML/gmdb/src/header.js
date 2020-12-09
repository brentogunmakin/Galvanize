import React, { Component }  from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavBar = styled.div`
    font-size:        20px;
    color:            white;
    display:          flex;
    justify-content:  space-between;
    background-color: #353a40;
    margin-top:       -10px;
    width:            100vw;
    height:           40px;
    align-items:      center;
`;

const OurLinks = styled(Link)`
    background-color: blue;
`;

const Header = () => {
    return(
        <NavBar>
            <section>
                GMDB
                <OurLinks to="/">HomePage</OurLinks>
                <OurLinks to="/LoginPage">LoginPage</OurLinks>
                <button class="navButt">Login</button>
            </section>
            
            <section class="secNavC">
                <input type="text" />
                <OurLinks to="/SearchPage">Search</OurLinks>
            </section>
        </NavBar>
    )
}

export default Header;