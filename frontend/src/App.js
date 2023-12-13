//import { Button } from '@chakra-ui/react'
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider, Outlet} from 'react-router-dom'
import Home from "./components/Home"
import ChatPage from './components/ChatPage';


function App() {

  const Root=()=>{
    return(
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/chat"> ChatPage</Link>
        </div>
        <div>
          <Outlet/>
        </div>
      </>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;
