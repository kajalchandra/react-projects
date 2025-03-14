import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"


const ItemList = ({items}) => {
    console.log("items",items)
    // dispatch is also a hook
    const dispatch = useDispatch()
    const handleAddItem = (item) =>{
      //1st step dispatch an action
      dispatch(addItem(item))
    }


  return (
    <div>
        
            {items.map((item) => 
            <div 
            key={item.card.info.id} 
            className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between"
            >
              <div className="9/12">
                <div className="py-2">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span>
                         {"   "} -₹ { item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        
                    </div>
                    <p>{item.card.info.description}</p>
              </div>
                
                {/* it will have description tag */}
                
                <div className="3/12 relative">
                    <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+item.card.info.imageId}
                    className="w-[560px] "></img>
                    <div className="absolute ">
                    <button 
                    className="p-2 bg-black rounded-md text-white"
                    //handleAddItem is working on this only item which we pass as argument
                    onClick={()=>handleAddItem(item)}>Add + </button> 
                    {/* onClick={handleAddItem(item)}>Add + </button> difference between the above two*/}
                    </div>
                    
                </div>
               
            </div>)}
       
    </div>
  )
}

export default ItemList