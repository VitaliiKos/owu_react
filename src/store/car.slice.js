import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../services";


export const carGetAll = createAsyncThunk(
    'carConstructor/carGetAll',
    async (_, {rejectWithValue})=>{
        try {
            return await carServices.getAll()
        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)


export const carCreate = createAsyncThunk(
    'carConstructor/carCreate',
    async ({data},{dispatch})=>{
        try {
             const newCar = await carServices.create(data)
            console.log(newCar)
            dispatch(addCar({data:newCar}))
        }catch (e){
            console.log((e.message));
        }
    }
)

export const carDelete = createAsyncThunk(
    'carConstructor/carDelete',
    async ({id},{dispatch})=>{
        try {
            await carServices.deleteByID(id);
            dispatch(deleteCar({id}))
        }catch (e){
            console.log(e.message)
        }
    }
)



const carSlice = createSlice({
    name:'carConstructor',
    initialState:{
        cars:[],
        status:null,
        error:null
    },
    reducers:{
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action)=>{
            state.cars = state.cars.filter(car=>car.id !== action.payload.id)
        }
    },
    extraReducers:{
        [carGetAll.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [carGetAll.fulfilled]:(state, action)=>{
            state.cars = action.payload
        },
        [carGetAll.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer;
const {addCar, deleteCar} = carSlice.actions;

export default carReducer

export const carActions = {
    addCar, deleteCar
}