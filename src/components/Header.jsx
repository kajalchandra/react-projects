import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = ()=>{
  // let btnName = "LogIn"
  const [btnName , setbtnName] = useState("LogIn")

  const handleLog =()=>{
    if(btnName === "LogIn"){
      setbtnName("LogOut")
      
    }else{
      setbtnName("LogIn")
    }
    console.log(btnName)
  }
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  console.log('loggedinuser',loggedInUser)

  // to read the store , we will use selector , selector is a hook
  // subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items)
  console.log('cartItems:', cartItems)

  
    return(
        <div className="flex justify-between bg-orange-400 items-center py-3 shadow-2xl">
          <div className="flex flex-col items-center">
            <img src="https://cdn-icons-png.freepik.com/256/8449/8449978.png?semt=ais_hybrid" alt="food-icon"
            className="w-20 ml-6"></img>
            <h3 className="items-center text-2xl font-bold ml-4">foodCafe</h3>
          </div>
          
          <ul className="flex items-center">
            {/* this says if my onlineStatus is true show this tick and if it is false show cross */}
            <li>Online Status: {onlineStatus? "✅" : "🔴"}</li> 
            <li className="mx-3 text-2xl font-semibold hover:text-green-700 cursor-pointer"><Link to={"/"}>Home</Link></li>
            <li className="mx-3 text-2xl font-semibold hover:text-green-700 cursor-pointer"><Link to={"/aboutus"}>About us</Link></li>
            <li className="mx-3 text-2xl font-semibold hover:text-green-700 cursor-pointer"><Link to={"/Contactus"}>Contact us</Link></li>
            <li className="mx-5 text-2xl font-semibold hover:text-green-700 cursor-pointer "><Link to={"/cart"}>Cart-({cartItems.length} items)</Link ></li>
            <li className="mx-5 text-2xl font-semibold hover:text-green-700 cursor-pointer"><Link to={"/grocery"}>Grocery</Link ></li>
            <button className="ml-5 mr-7 text-2xl font-semibold border border-white px-2 py-2 bg-white rounded-md cursor-pointer" onClick={handleLog}>{btnName}</button>
            <li className="mx-5 text-2xl">{loggedInUser}</li>
          </ul>
        </div>
    )
}
export default Header