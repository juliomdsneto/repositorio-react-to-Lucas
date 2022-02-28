
import React, { useState } from 'react'
// import Dropdown from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBeer } from 'react-icons/fa';

const Blotter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  // const defaultOption = options[0];

  return (
    <div style={{ height: '70vh', width: '50vw', marginLeft: 'auto', marginRight: 'auto' }}>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>

        <div style={{ display: 'flex', flexDirection: 'column', background: '#13466C', width: '800px', boxShadow: '1px 1px 1px black' }}>
          <label style={{ marginTop: 'auto', marginBottom: 'auto' }}> Filters</label>
          <Dropdown
            baseClassName="rdn"
            className=""
            matcher={function noRefCheck() { }}
            menu="div"
            onChange={function noRefCheck() { }}
            onClose={function noRefCheck() { }}
            onOpen={function noRefCheck() { }}
            options={[
              <ul style={{ display: 'flex', flexDirection: 'row', gap: '15px', listStyleType: 'none' }}>
                <li > <label>Pair</label> <input type='text' style={{ width: '200px' }} />
                </li>
                <li><label> Start</label>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                  />
                </li>
                <li> <label> End</label>
                  <DatePicker placeholder="Enter Date"
                    selected={endDate}
                    onChange={date => setendDate(date)}

                  // Uncomment below properties to show month picker. Note that, range restiction (min and max properties) should be removed for this case. 
                  // start="Year"
                  // depth="Year"
                  ></DatePicker>
                </li>

              </ul>,
              <ul style={{ display: 'flex', flexDirection: 'row', gap: '15px', listStyleType: 'none' }}>
                <li>
                  <label> Min price</label>
                  <input type='text' style={{ width: '95px' }} />
                </li>
                <li>
                  <label> Max price</label>
                  <input type='text' style={{ width: '95px' }} />
                </li>
                <li>
                  <label> Min QTY</label>
                  <input type='text' style={{ width: '95px' }} />
                </li>
                <li>
                  <label> Max QTY</label>
                  <input type='text' style={{ width: '95px' }} />
                </li>
              </ul>
            ]}
          />
        </div>
      </div>
      <div style={{ background: '#002955', marginTop: '30px', width: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '110px', listStyleType: 'none', color: '#37879E', marginBottom: '10px' }}>
          <li >
            <label>
              Date
            </label>
          </li>
          <li >
            <label style={{ marginLeft: '20px' }}>
              Pair
            </label>
          </li>
          <li >
            <label>
              Price
            </label>
          </li>
          <li >
            <label style={{ marginLeft: '-30px' }}>
              Quantity
            </label>
          </li>
          <li >
            <label style={{ marginLeft: '-30px' }}>
              Market Data Link
            </label>
          </li>
        </ul>

        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '3px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000
            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '70px', listStyleType: 'none', color: '#FFFFFF', marginBottom: '10px', borderTop: '1px solid white' }}>
          <li >
            <label>
              2018/10/23

            </label><br />
            <label>
              22:38:43.000

            </label>
          </li>
          <li >
            <label>
              GBP/USD
            </label>
          </li>
          <li >
            <label>
              1.2988
            </label>
          </li>
          <li >
            <label>
              2000000
            </label>
          </li>
          <li >
            <FaBeer />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Blotter;
//style={{ borderBottom: '3px solid white' }}