import React, { Component } from 'react';

const EmailView = (props) => {
    
   const displayEmail = (props) => {
       console.log(props);
   }

    return(
        <div>
            <li>
                {displayEmail(props)}
            </li>
        </div>
    )
}

export default EmailView;