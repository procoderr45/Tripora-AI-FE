import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './layout/Body'
import Home from './layout/Home'
import { lazy, Suspense } from 'react'

const NewPlan = lazy(() => import("./components/plan/NewPlan"))
const Login = lazy(() => import("./components/auth/Login"))
const Signup = lazy(() => import("./components/auth/Signup"))
const UpdateInfo = lazy(() => import("./components/profile/UpdateInfo"))
const PlanDetails = lazy(() => import("./components/plan/PlanDetails"))
const MyPlans = lazy(() => import("./components/plan/MyPlans"))


import { Provider } from 'react-redux'
import appStore from './store/appStore'
import Spinner from './components/common/Spinner'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Suspense fallback={<div className='w-full h-[90vh] flex justify-center items-center'><Spinner /></div>}>

            <Routes>

              <Route path='/' element={<Body />}>
                <Route path="" element={<Navigate to={"/home"} replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/plan/new" element={<NewPlan />} />
                <Route path="/profile/update" element={<UpdateInfo />} />
                <Route path="/profile/plans" element={<MyPlans />} />

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/plan/:id" element={<PlanDetails />} />

              </Route>

            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
