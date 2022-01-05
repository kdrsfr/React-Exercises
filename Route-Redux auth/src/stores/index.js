import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter"
import siteReducer from "./site.js"
import authReducer from "./auth"

export default configureStore({
    reducer: {
        counter: counterReducer,
        site: siteReducer,
        auth: authReducer,
    },
})