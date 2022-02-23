import React, { useState } from 'react'
import './buttoms.css'
import MarketData from '../MarketData'
import Blotter from '../Blotter'

const Container = () => {
    const [viewType, setViewType] = useState('marketData')



    return (
        <div style={{ backgroundColor: '#1536D7', color: 'white', width: '90%', boxShadow: '10px 5px 5px black', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <button class="size_buttom" onClick={() => setViewType('marketData')}>Market Data</button>
                <button class="size_buttom" onClick={() => setViewType('blotter')}>Blotter</button>
            </div>

            {viewType === 'marketData' &&
                <MarketData />
            }
            {viewType === 'blotter' &&
                <Blotter />
            }
        </div>
    )
}

export default Container;