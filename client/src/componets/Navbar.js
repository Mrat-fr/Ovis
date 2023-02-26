import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title"> 
        <img src={require('./icon.png')} width={100} height={100} alt='home'/>
        </Link>
        <ul>
            <CustomLink to="/Archive">Archive</CustomLink>
            <CustomLink to="/Response">Response</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}