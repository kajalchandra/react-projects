
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Contactus from './Contactus'
import { Children } from 'react'
import RestaurantMenu from './components/RestaurantMenu'
import Error from './components/Error'


function App() {

console.log(<Body/>) //this is an object at the end of the day, this object is basically react virtual dom
  return (
    <>
      
    <Header/>
    {/* <Body/> */}
    <Outlet/>
  
    </>
  )
}
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Body/>
      },
     {
      path : "/aboutus",
      element: <Aboutus/>
     },
     {
      path: "/contactus",
      element : <Contactus/>
     },
     {
      path:"/restaurant/:resId",
      element : <RestaurantMenu/> 
     }
    ],
    errorElement : <Error/>
  },
  
  // {
  //   path : "/aboutus",
  //   element: <Aboutus/>
  // },
  // {
  //   path: "/contactus",
  //   element : <Contactus/>
  // }
])


export default App
