import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    users: [{name: 'Jose'}, {name: 'Jorge'}]
}
 
const sliceUsuarios = createSlice({
    name: 'usuarios',
    initialState,
    reducers: {
        agregarUsuario: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})
 
export default sliceUsuarios.reducer
export const { agregarUsuario } = sliceUsuarios.actions
