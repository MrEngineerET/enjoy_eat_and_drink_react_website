import React from "react"
import { createBrowserRouter, Outlet } from "react-router-dom"
import { Login } from "../pages/login"
import { Signup } from "../pages/signup"
import { ForgotPassword } from "../pages/resetPassword"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="root">
        <div className="menubar">This is the Menu bar</div>
        <div>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "venue",
        element: (
          <div className="venue">
            <div className="sidebar">This is the venue side bar</div>
            <div>
              <Outlet />
            </div>
          </div>
        ),
        children: [
          {
            path: "general",
            element: <div>This is the general tab</div>,
          },
          {
            path: "menu-manager",
            element: <div>This is the menu-manager tab</div>,
          },
          {
            path: "menu-deal",
            element: <div>This is the menu-deal tab</div>,
          },
          {
            path: "event",
            element: <div>This is the event tab</div>,
          },
          {
            path: "setting",
            element: <div>This is the setting tab</div>,
          },
          {
            path: "users",
            element: <div>This is the users tab</div>,
          },
        ],
      },
      {
        path: "user",
        element: <div>This is the user page</div>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
])
