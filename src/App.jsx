import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./componentes/layouts/auth/Login";
import Home from "./componentes/layouts/pages/tienda/Home";
import Registro from "./componentes/layouts/auth/Registro";
import Products from "./componentes/layouts/pages/tienda/productos/Products";
import Banner from "./componentes/layouts/pages/tienda/Banner";
import Esprint from "./componentes/layouts/pages/tienda/Marcas/Esprint";
import Rifle from "./componentes/layouts/pages/tienda/Marcas/Rifle";
import Mango from "./componentes/layouts/pages/tienda/Marcas/Mango";
import AmericanBrands from "./componentes/layouts/pages/tienda/Marcas/AmericanBrands";
import Filter from "./componentes/layouts/pages/tienda/Filter";
import Trajes from "./componentes/layouts/pages/tienda/AllPrendas/Trajes";
import Camisas from "./componentes/layouts/pages/tienda/AllPrendas/Camisas";
import Accesorios from "./componentes/layouts/pages/tienda/AllPrendas/Accesorios";
import Pantalones from "./componentes/layouts/pages/tienda/AllPrendas/Pantalones";


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
  {
    path: '/productos',
    element: <Products />
  },
  {
    path: "/banner",
    element: <Banner />
  },
  {
    path: "/esprint",
    element: <Esprint />
  },
  {
    path: "/rifle",
    element: <Rifle />
  },
  {
    path: "/mango",
    element: <Mango />
  },
  {
    path: "/AmericanBrands",
    element: <AmericanBrands/>
  },,
  {
    path: "/filter",
    element: <Filter/>
  },
  {
    path: "/trajes",
    element: <Trajes />
  },
  {
    path: "/camisas",
    element: <Camisas />
  },
  {
    path: "/accesorios",
    element: <Accesorios />
  },
  {
    path:"/pantalones",
    element: <Pantalones/>
  }
  
  

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
