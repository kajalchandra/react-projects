import { useContext } from "react"
import UserContext from "../utils/UserContext"

const ResCards = ({resData})=>{
// const ResCards = (props)=>{
    //it is equivalen to const resData = props.resData
    // console.log("resdata",resData)
    const {name,cuisines,areaName,avgRatingString,cloudinaryImageId} = resData.info
    const {loggedInUser} = useContext(UserContext)
    
  
    return(
        <div className="w-[15rem] border border-b-black mx-4 mt-3 shadow-xl rounded-xl ">
            <div className="flex flex-col items-center mt-1">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
                className="w-[15rem] rounded-2xl h-[15rem]"></img>
            </div>
            <div>
                <h3 className="text-left font-semibold ml-2">{name}</h3>
                <h3 className="text-left font-semibold ml-2 text-gray-600">{cuisines.join(" ,")}</h3>
                <h3 className="text-left font-semibold ml-2 text-gray-600">{areaName}</h3>
                <h3 className="text-left font-semibold ml-2 text-gray-600">{avgRatingString}</h3>
                <h4 className="text-left font-semibold ml-2 text-gray-600">{loggedInUser}</h4>
            </div>
        </div>
    )
}

//hoc , it is a fucntion which takes a component as input and enhances it and returns us a component
export const isOpenLable = (ResCards)=>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded">Open</label>
                <ResCards {...props}/>
            </div>
        )
    }
}
export default ResCards