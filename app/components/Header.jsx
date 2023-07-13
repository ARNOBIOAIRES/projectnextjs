'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'

export default function Header() {
const pathname = usePathname()

  const mynavegation = [
    {
      label: "Home",
      path: '/'
    },
    {
      label: "About",
      path: '/about'
    },
    {
      label: "FAQ",
      path: '/about/faq'
    },
    {
      label: "Post",
      path: '/post'
    },
    {
      label: "Crud",
      path: '/crud'
    },
  ]
  
  return (
    <div>
      <ul className='flex gap-5 py-10'>
        {
          mynavegation.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className={ pathname === `${link.path}` ? "text-blue-500 font-bold": ''}>
                {link.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}