import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4();

export const addComplaintQuery = createAsyncThunk('addComplaintQuery', async(data,{rejectWithValue})=>{
    console.log("coming",data)
    // const complaintId = id++;
    const modifiedData = {
        ...data,
        createdOn : new Date().toISOString().split('T')[0],
        
        // complaintIdVisible : data.complaintId + data.consumerName.substring(0, 3).toUpperCase()
        // complaintIdVisible: complaintId.toString() +   (data.consumerName ? data.consumerName.substring(0, 3).toUpperCase() : '')
        complaintIdVisible: uniqueId
    }
    console.log("mod",modifiedData)
   const requestBody = JSON.stringify(modifiedData)
    
    const response = await fetch("http://192.168.0.169:9393/api/v1/complaint/complaints",{
        method :"POST",
        headers: {
            "content-type": "application/json",
        },
        body: requestBody
    });
    try{
        console.log("Data coming",requestBody)
        const result = await response.json()
        console.log("Data Posted",result)
        // return result
    }catch (error) {
        return rejectWithValue(error.response)
    }
})



export const UserSlice = createSlice({
    name:"UserSlice",
    initialState : {
        complaintQuery : []
    },
    reducers : {
       
    } ,extraReducers: (builder) => {
        builder
          .addCase(addComplaintQuery.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addComplaintQuery.fulfilled, (state, action) => {
            state.status = 'succeeded';
            
          })
          .addCase(addComplaintQuery.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }
})


export default UserSlice.reducer