import React from "react";
class UserClass extends React.Component{
    //React.component is a class which is there inside react package
    //this React.Component is a class which is given to us by react and userclass is inheriting some properties from it

    //we have class constructor and this contructor will now receive the props
    constructor(props){
        super(props)
        // console.log("classbased props",props)
        //if i have to create two state varibales in class based component
        this.state = {
            count : 0,
            count2 : 1,
            userInfo : {
                name2 : "Dummy",
                location : "default"
            }
        }
        console.log(this.props.name+"child constructor")

    }
    async componentDidMount(){
        console.log(this.props.name+"child componentDidMount")
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        console.log(json)

        this.setState({
            userInfo: json,
        })
    }
    componentDidUpdate(){
        console.log("Component Did Update")
    }
    componentWillUnmount(){
       console.log("Component will Unmount")
    }
    // here this render method will return some piece of jsx
    render(){
        console.log(this.props.name2+"child render")
        const {name2,location} = this.props
        return (
            <div className="border border-black w-[290px] h-[310px]">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    //i will update my state varibale
                    // NEVER UPDATE STATE VARIBALES DIRECTLY
                    //we'll use this.setState method and it will contain an object inside it
                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 + 1
                    })
                }}
                className="border border-purple bg-purple-400 px-2 py-1 rounded ml-1">Count Increase</button>
                <h1>This is a class based componet</h1>
                <h2>Name : {name2}</h2>
                <h2 className="text-2xl">Name: {this.state.userInfo.name}</h2>
                <h3 className="font-semibold text-xl">Location: {location}</h3>
                <h4 className="font-semibold text-xl">Contact: kajal@123</h4>
            </div>
        )
    }
}
export default UserClass