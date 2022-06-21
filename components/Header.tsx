import {
  BellIcon,
  SearchIcon,
  MenuIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Func, Movie } from '../typing'
import Leftnav from './Leftnav'

export default function Header({ onClose }: any) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <img
              src="https://rb.gy/ulxxee"
              width={100}
              height={100}
              className=" hidden cursor-pointer object-contain sm:flex"
            />
          </Link>
          <ul className="hidden space-x-4 sm:flex">
            <li className="headerLink"></li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>
        <div className=" flex items-center space-x-3 text-sm font-light">
          <MenuIcon
            className="headerRightLink  h-6 w-6 sm:visible"
            onClick={() => handleMenu()}
          />
          <SearchIcon className="headerRightLink  h-6 w-6" />
          <p className="headerRightLink">Kids</p>
          <BellIcon className="headerRightLink h-6 w-6" />
          <div className=" flex cursor-pointer items-center space-x-2 pl-5">
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="h-8 w-8 cursor-pointer rounded-full"
            />
            <div>
              <p className="text-sm font-bold">Armani Makni</p>
              <p className="text-xs font-thin">armanimaknii@gmail.com</p>
            </div>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </div>
      </header>
      <div>{isOpen && <Leftnav />}</div>
    </div>
  )
}
