import {BrowserRouter,Routes,Route} from "react-router-dom"
import Outlet from './components/Nav_Foot'
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet/>}  >
      <Route path="/" element={<Home/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      </Route> 
    <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  

   
  )
}

export default App