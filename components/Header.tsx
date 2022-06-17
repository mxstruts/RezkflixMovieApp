import { BellIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  onClose: boolean
}

export default function Header({ onClose }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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

  function closeMenu() {
    setIsOpen(true)
  }

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
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
          onClick={onClose}
        />
        <SearchIcon className="headerRightLink  h-6 w-6" />
        <p className="headerRightLink">Kids</p>
        <BellIcon className="headerRightLink h-6 w-6" />
        <Link href="/account">
          <a>
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </a>
        </Link>
      </div>
    </header>
  )
}
