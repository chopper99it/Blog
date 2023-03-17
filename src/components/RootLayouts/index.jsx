import { Outlet } from "react-router-dom";
import NavBar from "../layouts/Navbar";

const RootLayouts = () => {
  return (
      <div>
        <NavBar/>
        <main>
          <Outlet/>
        </main>
      </div>
  )
}

export default RootLayouts;