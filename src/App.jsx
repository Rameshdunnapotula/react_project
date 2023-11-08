import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
import CreatePost from './CreatePost'
import AllPost from './AllPost'
import UpdatePost from './UpdatePost'
import IndividualPost from './IndividualPost'

let route=createBrowserRouter([{
    element : <Home/>,
    path : "/",
    children : [{
        element : <CreatePost/>,
        index : true,
    },{
        element : <AllPost/>,
        path : "/allpost"
    },{
        element : <UpdatePost/>,
        path : "/update/:id",
    },{
        element : <IndividualPost/>,
        path : "/individual/:id"
    }]
}])
const App = () => {
  return <RouterProvider router={route}></RouterProvider>
}

export default App