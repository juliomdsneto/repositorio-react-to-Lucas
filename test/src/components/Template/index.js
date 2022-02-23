import React from 'react';

const Template = ({ children }) => {

    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', backgroundColor: '#021A92', height: '100px', color: 'white' }}>
                <div>Constancy </div>
                <div>Home </div>
                <div> Services </div>
                <div>About </div>
                <div>Team </div>
                <div>Contact </div>
                <div>Logout </div>

            </div>

            {children}

        </div>
    )
}

export default Template;