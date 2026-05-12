import './globals.css'
import Nav from '../components/Nav'
import { researcher } from '../data/site'

export const metadata = {
  title: researcher.name,
  description: `Academic website of ${researcher.name}, ${researcher.title} at ${researcher.institution}.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()} {researcher.name}
        </footer>
      </body>
    </html>
  )
}
