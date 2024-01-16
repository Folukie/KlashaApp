import React, { useState } from 'react'
import Header from '../Header'
import SideNavigation from '../SideNavigation'

const DashboardLayout = ({ children }) => {
  const [hidePanel, setHidePanel] = useState(false)

  return (
    <div className="relative">
      <Header />
      <div>
        <SideNavigation hidePanel={hidePanel} setHidePanel={setHidePanel} />

        <div
          className={` h-full px-2 bg-gray-100 md:py-8 md:px-8 text-primary-dark flex flex-col flex-1 overflow-y-auto  ${
            !hidePanel ? 'md:w-5/6 md:ml-auto ' : 'md:ml-28 md:w-11/12'
          } `}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
