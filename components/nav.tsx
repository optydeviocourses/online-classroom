import { NextComponentType } from 'next'
import Link from 'next/link'

const links = [
  { href: 'http://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'http://nextjs.org/docs', label: 'Docs' }
  // https://vercel.com/button
]
const Nav: NextComponentType = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline"> Home </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="btn-blue border-l-2 border-2 px-4 rounded-lg hover:bg-blue-400 transition duration-200 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="border-l-2 border-2 px-4 rounded-lg hover:bg-yellow-100 transition duration-200">
          Sair
        </button>
      </ul>
    </nav>
  )
}

export default Nav
