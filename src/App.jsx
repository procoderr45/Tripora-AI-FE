import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './layout/Body'
import Home from './layout/Home'
import NewPlan from './components/plan/NewPlan'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import UpdateInfo from './components/profile/UpdateInfo'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import PlanDetails from './components/plan/PlanDetails'
import MyPlans from './components/profile/MyPlans'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Body />}>
              <Route path="/home" element={<Home />} />
              <Route path="/plan/new" element={<NewPlan />} />
              <Route path="/profile/update" element={<UpdateInfo />} />
              <Route path="/profile/plans" element={<MyPlans />} />

              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/plan/:id" element={<PlanDetails />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
