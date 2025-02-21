import { useEffect,useState } from "react"


const useOnlineStatus = () => {
    const [onlineStatus,setonlinestatus] = useState(true)
    //how many times do we need to add that event listener which shows online and offline status? 
    //just once
    useEffect(()=>{   
          window.addEventListener("offline",()=>{
            setonlinestatus(false)
          })
         window.addEventListener("online",()=>{
            setonlinestatus(true)
         })
    },[])
    //boolean value
    return onlineStatus
}

export default useOnlineStatus