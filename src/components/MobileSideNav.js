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
      className={`bg-primary sidebar p-4 max-w-full w-full z-50 fixed top-0 left-0 hidden sm:block transition-all duration-300 transform ${
        isOpen ? '-translate-x-full' : ''
      }`}
    >
      <button onClick={close}>
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.76893 10.4285L18.2044 19.791M1.3334 19.791L9.76893 10.4285L1.3334 19.791ZM18.2044 1.06604L9.76732 10.4285L18.2044 1.06604ZM9.76732 10.4285L1.3334 1.06604L9.76732 10.4285Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div>
        <img src="/images/klasha.svg" alt="close icon" className="w-16 h-16" />
      </div>
      <div className="">
        <div className="py-8 space-y-8">
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
