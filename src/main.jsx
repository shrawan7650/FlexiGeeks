import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/Main/Framer.js";

import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Main/Home.jsx";
import About from "./components/Main/About.jsx";
import ContactUs from "./components/Main/parts/ContactUs.jsx";
import Community from "./components/Main/Community.jsx";
import Services from "./components/Main/Services.jsx";
import BecomeMember from "./components/Main/parts/BecomeMember.jsx";
import Projects from "./components/Main/Projects.jsx";
import Privacy from "./components/Footer/parts/Privacy.jsx";
import Terms from "./components/Footer/parts/Terms.jsx";
import Login from "./components/Main/NewUser/Login.jsx";
import Signup from "./components/Main/NewUser/Signup.jsx";
import Forgot from "./components/Main/NewUser/Forgot.jsx";
import Dashboard from "./components/Main/Profile/Dashboard.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />}>
        Outlet start
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="service" element={<Services />} />
        <Route path="memberform" element={<BecomeMember />} />
        {/* Login */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="f" element={<Dashboard />} />

        {/* Footer */}
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        {/* Outlet end */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
