/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import {
  MainPageNavigationLinks,
  AcceptPaymentLinks,
  SendPaymentLinks,
} from '../constants/navigation'
import Link from 'next/link'
import { SupportIcon } from './Icons'

const MobileSideNav = ({ close, isOpen }) => {
  console.log(isOpen, close)
  return (
    <nav
      className={`bg-primary sidebar p-4 w-full left-0 block transition-all duration-300 transform ${
        isOpen ? '-translate-x-full' : ''
      }`}
    >
      <div className="">
        <div className="py-3 px-4 space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Main pages</p>
            <ul className="space-y-3">
              {MainPageNavigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.route ? link.route : '/'}
                    passHref
                    className="flex gap-x-3 hover:text-pink"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm">Accept payments</p>
            <ul className="space-y-3">
              {AcceptPaymentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.route}
                    passHref
                    className="flex gap-x-3 hover:text-pink"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm">Send payments</p>
            <ul className="space-y-3">
              {SendPaymentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.route}
                    passHref
                    className="flex hover:text-pink gap-x-3"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 space-y-4">
        <p
          className={`flex bg-pink rounded-full text-sm gap-x-4 text-white items-center font-medium justify-center py-2 ${'w-32'}`}
        >
          <SupportIcon />
          Support
        </p>
      </div>
    </nav>
  )
}

export default MobileSideNav
