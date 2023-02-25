import { createContext, ReactNode } from 'react'

import { Container } from 'inversify'

type ContainerContext = {
  container: Container | null
}

export const InversifyContext = createContext<ContainerContext>({
  container: null
})

type ContainerProviderProps = {
  container: Container
  children: ReactNode
}

const ContainerProvider: React.FC<ContainerProviderProps> = ({
  container,
  children
}) => (
  <InversifyContext.Provider value={{ container }}>
    {children}
  </InversifyContext.Provider>
)

export default ContainerProvider
