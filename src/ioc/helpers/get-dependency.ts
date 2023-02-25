import { interfaces } from 'inversify'
import { container } from '~/ioc/inversify.config'

export const getDependency = <T extends unknown>(
  dependency: interfaces.ServiceIdentifier<T>
) => {
  try {
    return container.get<T>(dependency)
  } catch (error: unknown) {
    return container.resolve<T>(dependency as interfaces.Newable<T>)
  }
}
