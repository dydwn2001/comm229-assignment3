import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h3 className="HomeHead">My portfolio</h3>
      <nav className= "HomeNav">
        
        <ul>
        <li><div className="logo"></div></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Singin</Link></li>
        
        </ul>
      </nav>
      </div>
  )
}