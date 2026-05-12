'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { researcher } from '../data/site'

export default function Nav() {
  const pathname = usePathname()
  const isActive = (href) => pathname === href || pathname === href + '/'

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-name">{researcher.name}</Link>
        <ul className="nav-links">
          <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link href="/publications" className={isActive('/publications') ? 'active' : ''}>Publications</Link></li>
          <li><Link href="/cv" className={isActive('/cv') ? 'active' : ''}>CV</Link></li>
        </ul>
      </div>
    </nav>
  )
}
