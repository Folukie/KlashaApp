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
      <div className="md:mt-20 mt-24 ">
        <p className="font-medium">Sales overview</p>
        <div className="grid md:grid-cols-4 md:gap-x-5 space-y-4 md:space-y-0 my-6  justify-center">
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
      <div className="md:flex md:space-x-5 space-x-0">
        <SalesGraph />
      </div>
    </DashboardLayout>
  )
}
