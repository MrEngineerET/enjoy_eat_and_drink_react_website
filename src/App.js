import React from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/root"
import "./app.css"

function App() {
  return <RouterProvider router={router} />
}

export default App
