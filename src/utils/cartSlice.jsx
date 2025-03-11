import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name : 'cart',
    initialState : {
        items : [] // this is the initial state of our slice
    },
    reducers: {
        addItem : (state,action) =>{ //here addItem is the action and the function over here is reducer function, this function get access to the state and now it will modify our state based on the actions
            state.items.push(action.payload)
        },
        removeItem : (state)=>{
            state.items.pop()
        },
        //originalState = {items : ["pizza"]}
        clearCart : (state) =>{
            //RTK - either mutating the existing state or return a new state
            // state.items.length = 0; // originlState = []
            state.items.length = 0

            //return {items: []} ; this new [] will be replaced inside originalState = []
        }
    }
})

export const {addItem , removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer

//these cartSlice will return  me  this object

// {

//     actions : {
//         addItem , removeItem,clearCart
//     }
//     reducer

// }