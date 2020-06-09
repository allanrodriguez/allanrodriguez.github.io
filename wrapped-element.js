import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./src/reducers"

export default ({ element }) => {
  const store = configureStore({ reducer: rootReducer })
  return <Provider store={store}>{element}</Provider>
}
