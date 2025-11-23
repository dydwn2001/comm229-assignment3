import Home from './core/Home.jsx'
import About from './core/About.jsx'
import Contact from './contact/NewContact.jsx'
import Education from './education/NewEducation.jsx'
import Project from './project/NewProject.jsx'
import Service from './core/Service.jsx'
import { Routes, Route } from "react-router-dom"
import Signin from './lib/Signin.jsx'
import Signup from './user/Signup.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'
export default function MainRouter() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<PrivateRoute><Project /></PrivateRoute>}/>
      <Route path="/education" element={<PrivateRoute><Education /></PrivateRoute>}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
    </Routes>
    </div>
  )
}