import loadable from '@loadable/component'

export const Home = loadable(
  async () => import('~/app/presentation/pages/home/home'),
  {
    resolveComponent: (components) => components.default
  }
)
export const Login = loadable(
  async () => import('~/app/presentation/pages/login/login'),
  {
    resolveComponent: (components) => components.default
  }
)
