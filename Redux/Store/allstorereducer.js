import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "../Slices/UserSlice";
import AssignedToStaffSlice from "../Slices/AssignedToStaffSlice"
import CreateUserSlice from "../Slices/CreateUserSlice"

export default combineReducers({
    user_complaint : UserSlice,
    assigned_to : AssignedToStaffSlice,
    // create_user : CreateUserSlice
})