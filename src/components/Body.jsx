//import ResContainer from "./ResContainer"
import resList from "../utils/mockData"
import { useState } from "react"
import ResCards from "./ResCards"


const Body = ()=>{
   const[restaurant, setrestaurant]= useState(resList)
    const handleToprated =() =>{
     const filteredRestaurant =  resList.filter((res) => res.info.avgRating > 4.3 )
      console.log("filteredRestaurant",filteredRestaurant)
      setrestaurant(filteredRestaurant)
    }
    return(
        <div className="mt-3 h-full">
            <div className="flex items-center mb-5">
                <div className="flex">
                    <input type="text" className="border border-black py-1 rounded-md ml-4 flex "></input>
                    <button className="ml-1">
                        <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                        className="w-7 ml-2"></img>
                    </button>
                </div>
                <div className="flex items-center">
                    {/* for filter restaurant according to ratings */}
                    {/* <input className="border border-black py-1 rounded-md ml-4"></input>
                    <button>
                        <img src="https://cdn-icons-png.freepik.com/256/12828/12828278.png?semt=ais_hybrid"
                        className="w-7 ml-2"></img>
                    </button> */}
                    <button className="border border-black py-2 px-2 rounded-md ml-4" onClick={handleToprated}>Top Rated Restaurant</button>
                </div>
            </div>
            {/* <ResContainer/> */}
           
            <div className="border border-b-black h-full flex flex-wrap ">
           {restaurant.map((restaurant)=>
            <ResCards key={restaurant.info.id} resData={restaurant}/>
           )}
           </div>
        </div>
    )
}
export default Body