import { container } from '~/ioc/inversify.config'

export const bindDependencies = <T extends Function>(
  func: T,
  dependencies: [symbol]
) => {
  const injections = dependencies.map((dependency) => {
    return container.get(dependency)
  })
  return func.bind(func, ...injections)
}
