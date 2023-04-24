import {Routes, Route , Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Feature from '../pages/Feature'
import Login from '../pages/Login'
import Room from '../pages/Room'
import Signup from '../pages/Signup'
import Checkout from '../pages/Checkout'
import Blog from '../pages/Blog'
import ProducDetails from '../pages/ProductDetails'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to="home" />} />
    <Route path='home' element={<Home/>}/>
    <Route path='room' element={<Room/>}/>
    <Route path='room/:id' element={<ProducDetails/>}/>
    <Route path='feature' element={<Feature/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='blog' element={<Blog/>}/>
  </Routes>
}

export default Routers
