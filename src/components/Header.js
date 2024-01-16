/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import MobileSideNav from './MobileSideNav'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className=" fixed z-10 w-full bg-white border-b border-primary-light">
      <div className="flex md:absolute px-4 z-10 items-center md:justify-end w-full h-20 md:px-10 space-x-6 font-medium border-b border-primary-light">
        <div className="md:hidden flex items-center">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            easing="ease-in"
            duration={0.4}
          />
          <img
            src="/images/klasha.svg"
            alt="close icon"
            className="w-16 h-16"
          />
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28.8434 15.9995C28.8434 23.0803 22.8319 28.8435 15.9995 28.8435C9.16708 28.8435 3.15552 23.0803 3.15552 15.9995C3.15552 8.90598 8.90595 3.15555 15.9995 3.15555C23.093 3.15555 28.8434 8.90598 28.8434 15.9995Z"
              stroke="#0A0A0A"
              stroke-width="2"
            />
            <circle
              cx="15.9991"
              cy="10.8089"
              r="3.32624"
              stroke="#0A0A0A"
              stroke-width="2"
            />
            <path
              d="M22.7872 20.7606C22.7872 21.2529 22.362 21.9679 21.0591 22.6193C19.816 23.2409 18.0287 23.6542 15.9999 23.6542C13.9711 23.6542 12.1838 23.2409 10.9407 22.6193C9.63784 21.9679 9.21271 21.2529 9.21271 20.7606C9.21271 20.2847 9.26521 19.9215 9.38689 19.6282C9.49973 19.3562 9.69298 19.093 10.0733 18.8467C10.9008 18.3107 12.5908 17.8669 15.9999 17.8669C19.409 17.8669 21.0991 18.3107 21.9266 18.8467C22.3069 19.093 22.5001 19.3562 22.613 19.6282C22.7347 19.9215 22.7872 20.2847 22.7872 20.7606Z"
              stroke="#0A0A0A"
              stroke-width="2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 10L12 16L18 10"
              stroke="#0A0A0A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex">
          <p>En</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 10L12 16L18 10"
              stroke="#0A0A0A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && <MobileSideNav close={() => setOpen(false)} isOpen={isOpen} />}
    </header>
  )
}

export default Header
