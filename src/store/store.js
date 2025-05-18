import { configureStore } from '@reduxjs/toolkit'
import sliceUsuarios from './sliceUsuarios'
 
export const store = configureStore({
    reducer: {
        users: sliceUsuarios
    }
})
 
export default store