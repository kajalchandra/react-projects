
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Contactus from './Contactus'
import { Children } from 'react'
import RestaurantMenu from './components/RestaurantMenu'
import Error from './components/Error'
//import Grocery from './components/Grocery'
import { lazy,Suspense } from 'react'


//   1. Lazy Loading
// Lazy loading is a technique where components, images, or resources are loaded only when they are needed, 
// rather than all at once during the initial page load.

// whenever the user is going to that grocery page then only load it, that is known as on demand loading

//we'll won't import Grocery like that , we use use lazy function for that
//which takes a callback function over here and here we use import which is a function and it takes grocery path
const Grocery = lazy(()=> import('./components/Grocery'))

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
     },
     {
      path:"/grocery",
      element :<Suspense fallback={<h1>Loading....</h1>}> <Grocery/> </Suspense>
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
