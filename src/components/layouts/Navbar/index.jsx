import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="content">
       <Link to="/"> <h1 className="title">Learn Programming</h1></Link>
        <div className="navbar">
          <ul>
            <li>Blog</li>
            <li>Tags</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default NavBar;