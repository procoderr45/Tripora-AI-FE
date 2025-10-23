import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './layout/Body'
import Home from './layout/Home'
import NewPlan from './components/plan/NewPlan'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Body />}>
            <Route path="/home" element={<Home />} />
            <Route path="/plan/new" element={<NewPlan />} />

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
