import loadable from '@loadable/component'

export const Home = loadable(
  async () => import('~/app/presentation/pages/home/home'),
  {
    resolveComponent: (components) => components.default
  }
)
