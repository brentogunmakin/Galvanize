import React from 'react';
import ReactAttempt from './classattempt';
import styled from 'styled-components';
 const Header = styled.div`
margin-top: 0;
    background-color: #01a1dd;
    color: white;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    
    

` 

const Banner = () => {
    return(
        <div>
            <Header>
            Our Winter Blooms holiday collection is here. Shop Now | Free shipping on subscriptions or orders of $35+.
            </Header>
            <ReactAttempt>

            </ReactAttempt>
            
        </div> 
    )
}

export default Banner;