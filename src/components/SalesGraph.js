/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts'
import { overviewSalesData } from '../constants/overview'

const SalesGraph = () => {
  return (
    <div>
      <div>
        <div className=" space-x-5 py-2 items-center hidden md:flex">
          <p className="font-medium border-r border-lightgrey pr-2">Sales</p>
          <p className="text-sm">7 days</p>
          <p className="text-sm">30 days</p>
          <select
            name="days"
            id="days"
            className="border rounded-md py-1 px-3 w-24 text-sm"
          >
            {['USD', 'NGN', 'EUR'].map((currency, idx) => (
              <option value={currency} key={idx}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="border border-lightgrey w-72 rounded-md px-2 py-1"
          />
          <btn className="flex gap-x-2 border rounded-md text-sm py-1 px-2 w-52 justify-center">
            <img src="/images/download.svg" alt="download" />
            Download report
          </btn>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-5 space-y-4 justify-center ">
        <div className="border rounded-md p-3 md:w-full hidden md:block">
          <AreaChart
            width={720}
            height={280}
            data={overviewSalesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="95%" stopColor={'#EF2C5A'} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area
              dataKey="salesTrend"
              stroke={'#EF2C5A'}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        <div className="bg-pink relative text-white p-6 rounded-md h-auto md:w-96 w-80 mx-auto">
          <img
            src="/images/lines.svg"
            className="absolute bottom-0 top-0 z-10"
            alt="lines"
          />
          <div className="grid">
            <p className="prompt-info leading-loose font-medium">
              KlashaWire - send
              <br />
              money to businesses
              <br />
              globally from Africa
            </p>
            <div className=" hover:text-black hover:bg-white border cursor-pointer border-black bg-black mt-32 text-white font-medium text-center w-32 rounded-md p-2">
              Send a Wire
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesGraph
