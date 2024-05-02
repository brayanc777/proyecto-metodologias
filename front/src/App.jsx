import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./componentes/layouts/auth/Login"
import Home from "./componentes/layouts/pages/tienda/Home"
import Registro from "./componentes/layouts/auth/Registro"

let router = createBrowserRouter([
{
  path: '/',
  element: <Login/>
},
{
path: '/home',
element:<Home />
},
{
  path:'/registro',
  element: <Registro/>
}


])





function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
