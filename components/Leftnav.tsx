import {
  GlobeIcon,
  HomeIcon,
  NewspaperIcon,
  ClockIcon,
  CogIcon,
  BookmarkIcon,
  StarIcon,
  DownloadIcon,
  SupportIcon,
} from '@heroicons/react/outline'
import { ImAlarm } from 'react-icons/im'
import Link from 'next/link'
import React from 'react'

export default function Leftnav() {
  return (
    <div>
      <section className="leftSide sm:inline">
        <ul>
          <section className="leftnavBlock">
            <p className="leftSideRowText">MENU</p>
            <li className="leftSideRow">
              <Link href="/">
                <a>
                  <HomeIcon className="icon h-5 w-5" />
                  <p>Home</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <GlobeIcon className="icon h-5 w-5" />
                  <p>Discovery</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <NewspaperIcon className="icon h-5 w-5" />
                  <p>Community</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <ImAlarm className="icon h-5 w-5" />
                  <p>Coming Soon</p>
                </a>
              </Link>
            </li>
          </section>
          {/* library */}
          <section className="leftnavBlock">
            <p className="leftSideRowText">LIBRARY</p>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <ClockIcon className="icon h-5 w-5" />
                  <p>Recent</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <BookmarkIcon className="icon h-5 w-5" />
                  <p>Bookmarked</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <StarIcon className="icon h-5 w-5" />
                  <p>Top rated</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <DownloadIcon className="icon h-5 w-5" />
                  <p>Downloaded</p>
                </a>
              </Link>
            </li>
          </section>
          {/* Settings */}
          <section className="leftnavBlock">
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <CogIcon className="icon h-5 w-5" />
                  <p>Settings</p>
                </a>
              </Link>
            </li>
            <li className="leftSideRow">
              <Link href="/login">
                <a>
                  <SupportIcon className="icon h-5 w-5" />
                  <p>Help</p>
                </a>
              </Link>
            </li>
          </section>
        </ul>
      </section>
    </div>
  )
}
