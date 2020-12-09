import React, { Component }  from 'react';
import styled from 'styled-components';

const LoginForm = styled.section`
    display:        flex;
    align-items:    center;
    flex-direction: column;
`;

const LoginTitle = styled.p`
    font-family: sans-serif;
    font-weight: 700;
    font-size:   30px;
`;

const LoginPrompt = styled.p`
    font-weight: bold;
    text-align:  left;
    width:       50%;
`;

const LoginAnswer = styled.input`
    width:50%;
`;

const SubmitLogin = styled.button`
    align-self:       flex-start;
    margin-left:      25%;
`;

const LoginPage = () => {
    return(
        <LoginForm> 
            <LoginTitle>Login</LoginTitle>
            <LoginPrompt>Email:</LoginPrompt>
            <LoginAnswer type="text"></LoginAnswer>
            <br />
            <LoginPrompt>Password:</LoginPrompt>
            <LoginAnswer type="text"></LoginAnswer>
            <br />
            <SubmitLogin onclick="goSearch()">Login</SubmitLogin>
        </LoginForm>
    )
}




export default LoginPage;