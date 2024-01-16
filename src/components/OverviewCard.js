/* eslint-disable @next/next/no-img-element */
import React from 'react'

const OverviewCard = ({
  timeFrame,
  graphImage,
  hasGraph,
  duration,
  amount,
  background,
}) => {
  return (
    <div
      className={`border rounded-md p-4 h-56 flex flex-col justify-between w-64 md:w-full ${
        background ? 'bg-black text-white' : ''
      }`}
    >
      {hasGraph && <h4 className="text-sm">{timeFrame}</h4>}
      {hasGraph ? (
        <img
          src={`/images/${graphImage}.svg`}
          alt="graph"
          title="graph"
          className=""
        />
      ) : (
        ''
      )}
      <div className="space-y-2">
        <p className="text-sm">{duration}</p>
        <p className="font-medium">{amount}</p>
      </div>
    </div>
  )
}

export default OverviewCard
