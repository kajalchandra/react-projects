import { useEffect, useState } from "react"


const useRestaurantMenu = (resId) => {
    // const[resName,setresName] = useState(null)
    const[resMenuInfo,setresMenuInfo]= useState(null)

    //fetchdata
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.580372&lng=85.152958&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log(json)
        // setresName(json?.data?.cards[0]?.card?.card?.text)
        setresMenuInfo(json)
    }
    return resMenuInfo 
}

export default useRestaurantMenu