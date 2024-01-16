'use client'
import { FilterIcon, SearchIcon } from '@/components/Icons'
import Input from '@/components/Input'
import DashboardLayout from '@/components/Layout/DashboardLayout'
import Table from '@/components/Table'
import React from 'react'

const transactions = () => {
  return (
    <DashboardLayout>
      <div className="mt-20 border border-grey rounded-md ">
        <p className="px-4 py-4 border-b border-grey">Transaction history</p>

        <div className="flex justify-between px-4 py-4 border-b border-grey">
          <Input
            type="text"
            placeholder="Search"
            className="focus:border focus:border-black"
            rightIcon={<SearchIcon />}
          />

          <div className="flex space-x-6">
            <p className="flex items-center justify-between border rounded-md px-4 gap-x-3 text-sm">
              Filter <FilterIcon />
            </p>
            <p className="flex items-center justify-between border rounded-md px-4 text-sm">
              Export
            </p>
          </div>
        </div>

        <Table />
      </div>
    </DashboardLayout>
  )
}

export default transactions
