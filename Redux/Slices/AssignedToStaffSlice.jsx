import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addAssignedToDetail = createAsyncThunk('addAssignedToDetail', async(data,{rejectWithValue})=>{
    console.log("coming",data)
    //fetching complaint id 
    // const complaintId =  data.complaintId
    // console.log("complaintId of ",complaintId)
    // const requestBody = JSON.stringify(data)
    // console.log("REquest Body",requestBody)
    // Extract AssignedValues properties
    const { supportstaff, remarks, assignedOn, section ,consumerName , complaintDescription,intercom} = data.AssignedValues;
console.log("Consumer Name ",consumerName)
    // Merge AssignedValues properties with the rest of the data object
    const requestBody = JSON.stringify({
        consumerName ,
        complaintDescription ,
        intercom,
        supportstaff,
        remarks,
        assignedOn,
        section ,
        complaintId: data.complaintId
    });

     // Fetching complaint id
     const complaintId = data.complaintId;
     console.log("complaintId of ", complaintId);

     
    const response = await fetch(`http://192.168.0.169:9393/api/v1/complaint/${complaintId}`,{
        method :"PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: requestBody
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



export const AssignedToStaffSlice = createSlice({
    name:"AssignedToStaffSlice",
    initialState : {
        AssignedTo : []
    },
    reducers : {
       
    } ,extraReducers: (builder) => {
        builder
          .addCase(addAssignedToDetail.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addAssignedToDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            
          })
          .addCase(addAssignedToDetail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }
})


export default AssignedToStaffSlice.reducer