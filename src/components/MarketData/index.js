import React, { useState } from 'react'
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  Legend
} from 'recharts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import * as ReactDOM from "react-dom";



const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const MarketData = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());


  return (
    <div style={{ height: '70vh', width: '50vw', marginLeft: 'auto', marginRight: 'auto' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> Provider</label>
          <input type='text' />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> Pair</label>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> Start</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> End</label>
          <DatePicker placeholder="Enter Date"
            selected={endDate}
            onChange={date => setendDate(date)}

          // Uncomment below properties to show month picker. Note that, range restiction (min and max properties) should be removed for this case. 
          // start="Year"
          // depth="Year"
          ></DatePicker>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <label style={{ display: 'flex', justifyContent: 'center', fontSize: '28px' }}> Price Vs Time</label>
        <LineChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 2,
            bottom: 5
          }}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="red"
            activeDot={{ r: 5 }}
          />
          <Line type="monotone" dataKey="uv" stroke="white" />
        </LineChart>
      </div>
    </div>
  )
}

export default MarketData;