const Header = ()=>{
    return(
        <div className="flex justify-between bg-orange-400 items-center py-3 shadow-2xl">
          <div className="flex flex-col items-center">
            <img src="https://cdn-icons-png.freepik.com/256/8449/8449978.png?semt=ais_hybrid" alt="food-icon"
            className="w-20 ml-6"></img>
            <h3 className="items-center text-2xl font-bold ml-4">foodCafe</h3>
          </div>
          
          <ul className="flex ">
            <li className="mx-3 text-2xl font-semibold hover:text-green-700">Home</li>
            <li className="mx-3 text-2xl font-semibold hover:text-green-700">About us</li>
            <li className="mx-3 text-2xl font-semibold hover:text-green-700">Contact us</li>
            <li className="mx-5 text-2xl font-semibold hover:text-green-700">Cart</li>
          </ul>
        </div>
    )
}
export default Header