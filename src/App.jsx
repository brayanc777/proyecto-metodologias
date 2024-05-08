import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./componentes/layouts/auth/Login";
import Home from "./componentes/layouts/pages/tienda/Home";
import Registro from "./componentes/layouts/auth/Registro";
import Carrito from "./componentes/layouts/auth/Carrito";
import Products from "./componentes/layouts/pages/tienda/Products";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  { path: "/carrito",
    element: <Carrito /> },
    {
      path:'/productos',
      element: <Products/>
    }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
