/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import {
  MainPageNavigationLinks,
  AcceptPaymentLinks,
  SendPaymentLinks,
} from '../constants/navigation'
import Link from 'next/link'
import { HidePanelIcon, SupportIcon } from './Icons'
const SideNavigation = ({ hidePanel, setHidePanel }) => {
  // const [hidePanel, setHidePanel] = useState(false)

  return (
    <nav
      className={`${
        !hidePanel ? 'w-64' : 'w-28'
      }  md:fixed bg-primary z-20 h-screen min-h-full overflow-x-hidden overflow-y-auto px-10 py-3`}
    >
      <div>
        <img src="/images/klasha.svg" alt="close icon" className="w-16 h-16" />
      </div>
      <div className="">
        <div className="py-8 space-y-8">
          <div className="space-y-2">
            {!hidePanel && <p className="text-sm">Main pages</p>}
            <ul className="space-y-3">
              {MainPageNavigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.route ? link.route : '/'}
                    passHref
                    className="flex gap-x-3 hover:text-pink"
                  >
                    {link.icon}
                    {!hidePanel ? link.name : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            {!hidePanel && <p className="text-sm">Accept payments</p>}
            <ul className="space-y-3">
              {AcceptPaymentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.route}
                    passHref
                    className="flex gap-x-3 hover:text-pink"
                  >
                    {link.icon}
                    {!hidePanel && link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            {!hidePanel && <p className="text-sm">Send payments</p>}
            <ul className="space-y-3">
              {SendPaymentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.route}
                    passHref
                    className="flex hover:text-pink gap-x-3"
                  >
                    {link.icon}
                    {!hidePanel && link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 space-y-4">
        <p
          className={`flex bg-pink rounded-full text-sm gap-x-4 text-white items-center font-medium justify-center py-2 ${
            !hidePanel ? 'w-32' : 'w-10'
          }`}
        >
          <SupportIcon /> {!hidePanel && 'Support'}
        </p>
        <button
          className={`border rounded-md flex text-sm gap-x-4 items-center justify-center py-2 font-medium ${
            !hidePanel ? 'w-32' : 'w-10'
          }`}
          onClick={() => {
            setHidePanel(!hidePanel)
          }}
        >
          <HidePanelIcon />
          {!hidePanel && 'Hide panel'}
        </button>
      </div>
    </nav>
  )
}

export default SideNavigation
