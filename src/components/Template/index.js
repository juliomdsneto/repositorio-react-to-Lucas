import React from 'react';

const Template = ({ children }) => {

    return (

        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', width: '100%', backgroundColor: '#002952', height: '100px', color: 'white' }}>
                <div style={{ fontSize: '26px' }}>Constancy </div>
                <div className="navbar">

                    <ul style={{ display: 'flex', flexDirection: 'row', gap: '30px', listStyleType: 'none' }}>
                        <li>home</li>
                        <li>services</li>
                        <li>about</li>
                        <li>about</li>
                        <li>team</li>
                        <li>contact</li>
                        <li>logout</li>
                    </ul>
                </div>

            </div>

            {children}

        </div>
    )
}

export default Template;