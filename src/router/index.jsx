import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../components/RootLayouts";
import Home from "../pages/Home";
import PostJavascript from "../pages/PostJavascript";
import PostHTMLCSS from "../pages/PostHTMLCSS";
import PostReactJS from "../pages/PostReactJS";
import PostNodeJSExpressJS from "../pages/PostNodeJSExpressJS"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/posthtmlcss",
        element: <PostHTMLCSS/>
      },
      {
        path: "/postjavascript",
        element: <PostJavascript/>
      },
      {
        path: "/postreactjs",
        element: <PostReactJS/>
      },
      {
        path: "/postnodejs",
        element: <PostNodeJSExpressJS/>
      },
    ]
  }
])
export default router;