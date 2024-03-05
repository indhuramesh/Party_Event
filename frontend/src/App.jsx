import Home from "./Components/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Services from "./Components/Services"
import Form from "./Components/Form"
import Booking from "./Components/Success"
import BookingDetails from "./Components/Booking"
import AdminSignin from "./Components/AdminSignin"
import ViewEvents from "./Components/ViewEvents"
import Admin from "./Components/Admin"
import Landing from "./Components/Landing"
import ViewBookings from "./Components/Booking"
import CustomerSignin from "./Components/CustomerSignin"
import CustomerSignup from "./Components/CustomerSignup"
import AddEvents from "./Components/AddEvents"
import UpdateEvents from "./Components/UpdateEvents"
import Delete from "./Components/Delete"
import About from "./Components/About"
import Blog from "./Components/Blog"
import MyBookings from "./Components/MyBookings"
import UpdateBooking from "./Components/UpdateBookings"
import UserDetails from "./Components/UserDetails"
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/CustomerSignin" element={<CustomerSignin/>}/>
      <Route path="CustomerSignup" element={<CustomerSignup/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/BookingDetails" element={<BookingDetails/>}/>
      <Route path="AdminSignin" element={<AdminSignin/>}/>
      <Route path="ViewEvents" element={<ViewEvents/>}/>
      <Route path="Admin" element={<Admin/>}/>
      <Route path="Landing" element={<Landing/>}/>
      <Route path="/ViewBookings" element={<ViewBookings/>}/>
      <Route path="/AddEvents" element={<AddEvents/>}/>
      <Route path="/UpdateEvents" element={<UpdateEvents/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/MyBookings" element={<MyBookings/>}/>
      <Route path="/updateBooking" element={<UpdateBooking/>}/>
      <Route path="/User" element={<UserDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App