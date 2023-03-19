/* eslint-disable */

import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../user/user'
export default configureStore({
    reducer: {
        user: userSlice
    }
})