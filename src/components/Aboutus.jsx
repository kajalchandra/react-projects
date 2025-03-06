import React from "react";
//import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";
class Aboutus extends React.Component{
  constructor(props){
    super(props)
    console.log("parent's contructor")
  }

  componentDidMount(){
    console.log("parent componentDidMount")
  }

  render(){
    console.log("parent render")
    return (
      <div className="text-3xl  font-semibold ">This is About us page

      {/* functional component */}
          <div className="flex space-x-3 my-9 pl-7">
              {/* <User name = {"kajal kumari (functional component wali"} location={'Patna'}/> */}
              LoggedIn User
              <UserContext.Consumer>
                {(loggedInUser) => <h1>{loggedInUser}</h1>}
              </UserContext.Consumer>
              <UserClass name ={"first "} location={"Patna"}/>
              
              {/* we are creating two instances of the same class */}
              <UserClass name ={"second "} location={"Patna"}/>
              <UserClass name ={"third "} location={"Patna"}/>
          </div>
      </div>
     
    )
  }
  
}
 


export default Aboutus