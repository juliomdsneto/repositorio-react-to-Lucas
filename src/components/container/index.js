import React, { useState } from 'react'
import './buttoms.css'
import MarketData from '../MarketData'
import Blotter from '../Blotter'

const Container = () => {
    const [viewType, setViewType] = useState('marketData')



    return (
        <div class="container_block" style={{ backgroundColor: 'rgba(5, 47, 82, 0.8)', color: 'white', width: '70%', boxShadow: '10px 5px 5px black', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
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