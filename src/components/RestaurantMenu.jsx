import { useEffect} from "react"
import { useState } from "react"
import ShimmerContainer from "./ShimmerContainer"
import { useParams } from "react-router-dom"


const RestaurantMenu = () => {
  const [resName,setresName] = useState(null)
  const[resMenuInfo,setresMenuInfo]= useState(null)
  const params = useParams()
  console.log("params",params)
  const resId = params.resId
  console.log("resId",resId)
useEffect(()=>{
  fetchMenu()
},[])

const fetchMenu = async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.580372&lng=85.152958&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
  const json = await data.json()
  console.log("value of json: ",json)
  setresName(json?.data?.cards[0]?.card?.card?.text)
  setresMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  console.log("value",resMenuInfo)
 
}
if(resMenuInfo === null){
  return <ShimmerContainer/>
}
  return (
    <div className="text-center">
        <h1 className="text-2xl font-bold">{resName}</h1>
        <h2></h2>
       <ul>
        {resMenuInfo.map((res)=><li key={res.card.info.id}>{res?.card?.info.name}</li>)}
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