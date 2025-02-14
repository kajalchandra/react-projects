//import ResContainer from "./ResContainer"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import ResCards from "./ResCards"
import { Link } from "react-router-dom"

import ShimmerContainer from "./ShimmerContainer"


const Body = ()=>{
    const [originalList,setoriginalList] = useState([])
   const[restaurant, setrestaurant]= useState([])
   const [searchText , setsearchText]= useState("")
   console.log("body rendered")
   useEffect(()=>{
    fetchData()
   },[])

   const fetchData = async()=>{
    const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.580372&lng=85.152958&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //console.log("data",Data)
    const json =await  Data.json()
    // console.log("json",json)
    setoriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log("restaurant:",restaurant)
   }

    const handleToprated =() =>{
     const filteredRestaurant =  originalList.filter((res) => res.info.avgRating > 4.3 )
      console.log("filteredRestaurant",filteredRestaurant)
      setrestaurant(filteredRestaurant)
    }

    if(restaurant.length === 0){
        return <ShimmerContainer/>
    }
    return(
       
        <div className="mt-3 h-full">
            <div className="flex items-center mb-5">
                <div className="flex">
                    <input type="text" value={searchText} onChange={(e)=> setsearchText(e.target.value)}
                    className="border border-black py-1 rounded-md ml-4 flex "></input>
                    <button onClick={()=>{
                        console.log("clicked")
                        const filterByName = originalList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        console.log(filterByName)
                        setrestaurant(filterByName)
                    }}
                    className="ml-1">
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
           <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><ResCards  resData={restaurant}/></Link> 
           )}
           </div>
        </div>
    )
}
export default Body