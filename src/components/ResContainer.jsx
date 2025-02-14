import ResCards from "./ResCards"
import resList from "../utils/mockData"
import { Link } from "react-router-dom"

   
    
const ResContainer = ()=>{
    return(
        <div className="border border-b-black h-full flex flex-wrap ">
           {resList.map((restaurant)=>
           <Link  to={"/restaurant/"+restaurant.info.id}  key={restaurant.info.id}><ResCards resData={restaurant}/></Link> 
           )}
            {/* <ResCards resData ={resList[0]}/>
            <ResCards resData ={resList[1]}/>
            <ResCards resData ={resList[2]}/>
            <ResCards resData ={resList[3]}/>
            <ResCards resData ={resList[4]}/>
            <ResCards resData ={resList[5]}/>
            <ResCards resData ={resList[6]}/>
            <ResCards resData ={resList[7]}/> */}
            {/* <ResCards name = {"Kulfi Mahal"} cuisines ={"kulfi,ice-cream,faluda"} location={"Frazer Road"} ratings={"4.0 stars"}/> */}
            
           
        </div>
    )
}
export default ResContainer
