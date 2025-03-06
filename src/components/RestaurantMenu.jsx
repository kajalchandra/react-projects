
import ShimmerContainer from "./ShimmerContainer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useEffect, useState } from "react"
import RestaurantCategory from "./RestaurantCategory"


const RestaurantMenu = () => {
  // const [resName,setresName] = useState(null)
  // const[resMenuInfo,setresMenuInfo]= useState(null)
  const [showIndex, setShowIndex] = useState(null)
  const params = useParams()
  console.log("params",params)
  const resId = params.resId
  console.log("resId",resId)
  //we'll create our custom hooks , here we'll extract the fetch logic of the resInfo and this RestaurantMenu is only concerned about to display
  //resMenuInfo
   const resMenuInfo = useRestaurantMenu(resId)
   console.log(resMenuInfo)
  
   const {itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {}
   console.log("cards",resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   const categories = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
   console.log("categories",categories)


if(resMenuInfo === null){
  return <ShimmerContainer/>
}
  return (
    <div className="text-center">
       
     
      {/* categories accordions */}
      {categories.map((category,index) => (
        //controlled component , now parent is controlling
          <RestaurantCategory key = {category?.card.card.name} data = {category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}/>
      ))}
    </div>
  )
}

export default RestaurantMenu