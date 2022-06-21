import Link from 'next/link'
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'

function Footer() {
  return (
    <div className="flex h-[10vh] items-center justify-center space-x-7">
      <Link href="https://www.instagram.com/mxstruts/">
        <a>
          <AiOutlineInstagram className="h-8 w-8 cursor-pointer" />
        </a>
      </Link>
      <Link href="https://www.facebook.com/mxstruts/">
        <a>
          <AiOutlineFacebook className="h-8 w-8 cursor-pointer" />
        </a>
      </Link>
      <Link href="https://github.com/mxstruts">
        <a>
          <AiOutlineGithub className="h-8 w-8 cursor-pointer" />
        </a>
      </Link>
    </div>
  )
}

export default Footer
