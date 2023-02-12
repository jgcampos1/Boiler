import { lazy } from 'react'
import Home from '~/app/presentation/pages/home/home'
import { type IRoute } from '../types'

export const RoutesConfig: IRoute[] = [
  {
    path: '/home',
    name: 'Home',
    private: false,
    element: <Home />,
    layout: 'DefaultLayout'
  },
  {
    path: '/login',
    name: 'Login',
    private: false,
    element: <Home />,
    layout: 'DefaultLayout'
  }
]
