
import './App.css'
import About from "./Blogs/About";
import { createRoot } from 'react-dom/client'
import NewBlog from "./Blogs/NewBlog";
import Layout from "./Blogs/Layout";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import './index.css'
import Home from './Blogs/Home.jsx';
import BlogDetails from './Blogs/BlogDetails.jsx';
import Error from './Blogs/Error.jsx';




function App() {


  const router = createBrowserRouter([
  { path : "/",
   element : <Layout/>,
   errorElement: <Error/>,
   children : [
    {
      path: "",
      element: <Home/>

    },
     {
     path : "/about",
     element : <About/>,
     },
     {
       path: "/newBlog",
       element: <NewBlog/>, 
     },
     {
       path : "/blogs/:id",
       element: <BlogDetails/>,
     }
   ]
 }
 ])


  
  return (
    <>   
       <RouterProvider router={router}/>
    </>
  )
}

export default App
