
import ShimmerContainer from "./ShimmerContainer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useEffect } from "react"


const RestaurantMenu = () => {
  // const [resName,setresName] = useState(null)
  // const[resMenuInfo,setresMenuInfo]= useState(null)
  const params = useParams()
  console.log("params",params)
  const resId = params.resId
  console.log("resId",resId)
  //we'll create our custom hooks , here we'll extract the fetch logic of the resInfo and this RestaurantMenu is only concerned about to display
  //resMenuInfo
   const resMenuInfo = useRestaurantMenu(resId)
   console.log(resMenuInfo)
  
   const {itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {}
   console.log("value",itemCards)


if(resMenuInfo === null){
  return <ShimmerContainer/>
}
  return (
    <div className="text-center">
        <h1 className="text-2xl font-bold">restaurant</h1>
        <h2></h2>
       <ul>
        {itemCards.map((res)=><li key={res.card.info.id}>{res?.card?.info.name}</li>)}
        {/* <li>Rabri</li>
        <li>Biryani</li>
        <li>Paneer Tikka</li>
        <li>Burger</li>
        <li>Pizza</li> */}
       </ul>
    </div>
  )
}

export default RestaurantMenu