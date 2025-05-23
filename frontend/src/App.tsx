import { 
  BrowserRouter, 
  Navigate, 
  Route, 
  Routes 
} from 'react-router-dom'
import { Home } from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={ <Navigate to={'/home'} /> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/signIn" element={ <SignIn/> } />
        <Route path="/signUp" element={ <SignUp/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
