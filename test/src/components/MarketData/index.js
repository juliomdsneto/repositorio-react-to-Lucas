import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
const MarketData = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> label</label>
          <input type='text' />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> label</label>
          <input type='text' />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> label</label>
          <input type='text' />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> label</label>
          <input type='text' />
        </div>
      </div>
      <div>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  )
}

export default MarketData;