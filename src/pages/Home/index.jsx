import { Link } from "react-router-dom";
import "./index.css"


const Home = () => {
  return(
    <div className="containerHome">
        <div className="contentHome">
          <h2>Posts</h2> 
          <div className="items">
            <Link to="/posthtmlcss" className="item">
              <img src="https://tolustar.com/wp-content/uploads/2020/02/html-css.jpg" alt="" />
              <p>HTML / CSS</p>
            </Link>
            <Link to="/postjavascript" className="item">
               <img src="https://blog.haposoft.com/content/images/2020/07/1_LyZcwuLWv2FArOumCxobpA.png" alt="" />
              <p>Javascript</p>
            </Link>
            <Link to="/postreactjs" className="item">
               <img src="https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg" alt="" />
              <p>React JS</p>
            </Link>
            <Link to="/postnodejs" className="item">
              <img src="https://www.sysleaf.com/static/4df94bc06ab3c9cbcafa31fe010c96e4/c1ced/nodejs-express.png" alt="" />
              <p>NodeJS & ExpressJS</p>
            </Link>
          </div>
        </div>
    </div>
  )
}
export default Home;