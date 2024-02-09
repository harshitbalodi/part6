import { createSlice } from "@reduxjs/toolkit";
const initialState = null;
const NotificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        setNotification(state, action){
            console.log(action.payload);
            return action.payload;
        },
        clearNotification(){
            return null;
        }
    }
})
export const {setNotification, clearNotification} = NotificationSlice.actions; 
export const setNotificationThunk=(notification, time )=>{
    return async dispatch =>{
        dispatch(setNotification(notification));
        setTimeout(()=>dispatch(clearNotification()), time*1000)
    }
}
export default NotificationSlice.reducer;