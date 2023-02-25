import { useContext, useMemo } from 'react'

import { interfaces } from 'inversify'

import { InversifyContext } from '~/app/presentation/providers/container-provider'

export const useService = <T>(
  identifier: interfaces.ServiceIdentifier<T>
): T => {
  const { container } = useContext(InversifyContext)

  if (!container) {
    throw new Error('The container should not be null')
  }

  try {
    return useMemo(() => container.get<T>(identifier), [container, identifier])
  } catch (error: unknown) {
    return container.resolve<T>(identifier as interfaces.Newable<T>)
  }
}
