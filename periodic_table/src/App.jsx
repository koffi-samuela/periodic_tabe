import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './components/Template';
import Home from './pages/Home';
import Details from './pages/Details/Details';


//COMPOSANT PRINCIPAL DU ROUTEUR
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div> error 404</div>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path:'/Details/:atomicnumber',
          element : <Details />
        },
      ]
    }
  ]
)
// export default App;
export default function App() {
  return  <RouterProvider router={router} />
  
}
