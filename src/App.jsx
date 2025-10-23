import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './layout/Body'
import Home from './layout/Home'
import NewPlan from './components/plan/NewPlan'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Body />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/plan/new" element={<NewPlan />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
