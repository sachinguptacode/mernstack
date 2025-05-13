import { Routes,Route } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Register2 from './component/Register2'
function App() {
  return (
     <div>
         <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='register' element = {<Register2/>}/>
         </Routes>
     </div>
  )
}

export default App
