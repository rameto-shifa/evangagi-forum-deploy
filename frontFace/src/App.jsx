import { Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect,useState,createContext } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SharedLayout from './components/SharedLayout'
import Landing from './components/Landing'
import AskQuestion from './components/AskQuestion'
import Answer from './components/Answer'
import NotFound from './pages/NotFound'

import axios from './axiosConfig'

export  const AppState = createContext();

function App() {
    const [user, setUser] = useState({});
    const token =  localStorage.getItem('token')
    const navigate = useNavigate()
  async function checkUser() {
    try {
      const {data} = await axios.get('/users/check', {
        headers:{
          Authorization: 'Bearer ' + token
        }
      });
      setUser(data)
    } catch (error) {
      console.log(error.response)
      navigate('/login')
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{user, setUser }}>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/questions" element={<Home />} />
					<Route path="/questions/ask" element={<AskQuestion />} />
					<Route path="/questions/:questionid" element={<Answer />} />
					<Route path="/" element={<Login />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
      </Routes>
    </AppState.Provider>
  )
}

export default App
