/* eslint-disable @next/next/no-img-element */
'use client'

import DashboardLayout from '@/components/Layout/DashboardLayout'
import Image from 'next/image'
import '../styles/index.scss'
import OverviewCard from '@/components/OverviewCard'
import { OverviewData } from '../constants/overview'
import SalesGraph from '@/components/SalesGraph'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="mt-20 ">
        <p>Sales overview</p>
        <div className="grid md:grid-cols-4 md:space-x-5 space-y-4 my-6 justify-center">
          {OverviewData.map((data) => (
            <OverviewCard
              key={data.id}
              hasGraph={data.graphImage}
              graphImage={data.graphImage}
              timeFrame={data.timeFrame}
              duration={data.duration}
              amount={data.amount}
              background={data.bg}
            />
          ))}
        </div>
      </div>
      <div className="flex space-x-5">
        <SalesGraph />
      </div>
    </DashboardLayout>
  )
}
