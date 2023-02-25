import { Home, Login } from '../router/lazy-routes-imports'
import { type IRoute } from '../types'

export const RoutesConfig: IRoute[] = [
  {
    path: '/home',
    name: 'Home',
    private: true,
    element: <Home />,
    layout: 'ProtectLayout'
  },
  {
    path: '/login',
    name: 'Login',
    private: false,
    element: <Login />,
    layout: 'DefaultLayout'
  }
]
