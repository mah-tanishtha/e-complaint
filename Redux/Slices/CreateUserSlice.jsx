import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { base_url } from "../../Base_Url/Base_Url";

export const createUserApi =  createAsyncThunk('createUserApi', async(data,{rejectWithValue})=>{
    console.log("Create User data",data)
    //fetching complaint id 
    // const complaintId =  data.complaintId
    // console.log("complaintId of ",complaintId)
    // const requestBody = JSON.stringify(data)
    // console.log("REquest Body",requestBody)
    // Extract AssignedValues properties
    // const { supportstaff, remarks, assignedOn, section ,consumerName , complaintDescription,intercom} = data.AssignedValues;
// console.log("Consumer Name ",consumerName)
    // Merge AssignedValues properties with the rest of the data object
    // const requestBody = JSON.stringify({
    //     consumerName ,
    //     complaintDescription ,
    //     intercom,
    //     supportstaff,
    //     remarks,
    //     assignedOn,
    //     section ,
    //     complaintId: data.complaintId
    // });

     // Fetching complaint id
    //  const complaintId = data.complaintId;
    //  console.log("complaintId of ", complaintId);

     
    const response = await fetch(base_url,{
        method :"GET",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try{
        console.log("Response Coming from Call DEtail",response)
        console.log("Assigned To Data coming",data)
        const result = await response.json()
        console.log("Assigned Data Posted",result)
        return result
    }catch (error) {
        return rejectWithValue(error.response)
    }
})




export const CreateUserSlice = createSlice({
    name : "CreateUserSlice",
    initialValues : {
        loading : false,
        user : [],
        error : null
    },
    reducers : {

    },extraReducers : (builder)=>{
     builder
     .addCase(createUserApi.pending,(state)=>{
        state.loading = true
     })
     .addCase(createUserApi.fulfilled , (state, action)=>{
        state.loading = false
        state.user = action.payload
     })   
     .addCase(createUserApi.rejected , (state,action)=>{
        state.error = action.error.message
     })
    }
})

export default CreateUserSlice.reducer