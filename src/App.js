
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';


const myRouter = createBrowserRouter([
 {Path:"/",element:<Layout/>,children:[
  {index:true,element:<Login/>},
  {path:"Login",element:<Login/>},
  {path:"register",element:<Register/>},
  {path:"*",element:<Notfound/>},
 ]}
])
function App() {

  return <>
  
  <RouterProvider router={myRouter}/>
  </>
}

export default App;


