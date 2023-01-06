import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom"
import { Login } from "../pages/login"
import { Signup } from "../pages/signup"
import { ForgotPassword } from "../pages/resetPassword"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route
        path="/"
        element={
          <div className="root">
            <div className="menubar">This is the Menu bar</div>
            <div>
              <Outlet />
            </div>
          </div>
        }
      >
        <Route
          path="venue"
          element={
            <div className="venue">
              <div className="sidebar">This is the venue side bar</div>
              <div>
                <Outlet />
              </div>
            </div>
          }
        >
          <Route path="general" element={<div>This is the general tab</div>} />
          <Route
            path="menu-manager"
            element={<div>This is the menu manager tab</div>}
          />
          <Route
            path="menu-deal"
            element={<div>This is the menu deal tab</div>}
          />
          <Route path="event" element={<div>This is the event tab</div>} />
          <Route path="setting" element={<div>This is the setting tab</div>} />
          <Route path="users" element={<div>This is the users tab</div>} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </>
  )
)
