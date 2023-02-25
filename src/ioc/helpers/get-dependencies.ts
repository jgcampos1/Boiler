import { container } from '~/ioc/inversify.config'

export const getDependencies = <T extends unknown>(
  dependencies: [...symbol[]]
) => {
  const injections = dependencies.map((dependency) => {
    return container.get(dependency)
  })

  return injections as T
}
