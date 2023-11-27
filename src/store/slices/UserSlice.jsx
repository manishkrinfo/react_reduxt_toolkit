import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: [],
   reducers : {
      addUser(state, action) { 
         //console.log(action.payload);
         state.push(action.payload);
      },
      removeUser(state, action) { 
         //console.log("hii" + action.payload);
         state.splice(action.payload,1)
      },
      clearAllUsers(state, action) {
         return [];
       },
   },
});

export default userSlice.reducer ;

export const { addUser,removeUser,clearAllUsers } =userSlice.actions;