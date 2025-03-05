import ItemList from "./ItemList"
import { useState } from "react"


const RestaurantCategory = (data) => {
    const [showItems , setShowItems] = useState(false)
    console.log("data",data)

    const handleClick = () => {
        setShowItems(!showItems)
    }
  return (
    <div>
        {/* Header */}
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-3 ">
            <div className="flex justify-between"
            onClick={handleClick}
            >
                <span className="font-bold">{data.data.title} ({data.data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
        
          {/* Accordion Body */}
         {showItems && <ItemList  items={data.data.itemCards}/>}
      </div>
      
        
    </div>
  )
}

export default RestaurantCategory