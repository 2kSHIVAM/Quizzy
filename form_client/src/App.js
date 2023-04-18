// eslint-disable-next-line 
import React from 'react';
import { Response } from './pages';
import { Greeting } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Response/>
  },
  {
    path: "/submitted",
    element: <Greeting/>
  }
])

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <RouterProvider router={router}/>
        {/* <Router>
          <Route path="" element={<Response/>}/>
          <Route path="/submitted" element={<Greeting/>}/>
        </Router> */}
      </div>
    </div>
  )
}

export default App