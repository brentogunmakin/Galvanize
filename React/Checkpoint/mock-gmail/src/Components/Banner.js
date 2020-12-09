import React from "react";
import { Input } from "semantic-ui-react";
import Logo from "../icons/gmail-logo.png";
import User from "../icons/user.png";
import { Link, BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";

const NavBar = styled.div`
  padding-top: 10px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-top: -10px;
  width: 100vw;
  height: 63px;
  align-items: center;
  border-bottom: 1px solid #eaeae9;
`;
const TopLinks = styled(Link)`
  padding: 40px;
`;
const TopSearchBar = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  height: 40px;
  width: 60%;
  border: none;
  border-radius: 10px;
  background-color: #f0f0f0;
`;
const TopImageLeft = styled.img`
 height: 40px;
 width: 40px;
 background-color: white;
`;

const Banner = () => {
  return (
    <>
      <Router>
        <NavBar>
          <TopLinks to="./">
            <img src={Logo}></img>
          </TopLinks>
          <TopSearchBar placeholder="    Search Item"></TopSearchBar>
          <TopImageLeft src={User}>

          </TopImageLeft>
        </NavBar>
      </Router>
    </>
  );
};

export default Banner;
