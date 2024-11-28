import './App.css'
import { Routes, Route } from 'react-router'
import PageNotFound from './screens/PageNotFound'
import MainLayout from './components/MainLayout'
import HomeScreen from './screens/HomeScreen'
import GalleryScreen from './screens/GalleryScreen'
import ContactScreen from './screens/ContactUs'
import ServiceScreen from './screens/ServiceScreen'
import TestimonialScren from './screens/TestimonialScreen'
import ReadMessageScreen from './screens/ReadMessages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='testimony' element={<TestimonialScren />} />
        <Route path='/services' element={<ServiceScreen />} />
        <Route path='gallery' element={<GalleryScreen />} />
        <Route path='/sms' element={<ReadMessageScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
