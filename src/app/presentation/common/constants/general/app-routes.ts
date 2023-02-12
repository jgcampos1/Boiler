import { type Params } from 'react-router'
import { generatePath } from 'react-router-dom'

import { RoutesConfig } from '~/app/main/config/routes-config'

enum RoutesNames {
  HOME = 'home'
}

type AppRouteType = {
  [key in RoutesNames]: {
    path: string
    navigate: <S extends string>(params?: Params<S>) => string
  }
}

const MakeAppRoutes = () =>
  RoutesConfig.reduce<Partial<AppRouteType>>(
    (accumulator, current) => ({
      ...accumulator,
      [current.name]: {
        path: current.path,
        navigate: <S extends string>(params?: Params<S>) =>
          generatePath(current.path, params)
      }
    }),
    {}
  )

export const AppRoutes = MakeAppRoutes()
