import { type ReactNode, type ReactElement } from 'react'

import { ThemeProvider } from '~/app/presentation/providers'

interface Props {
  children: ReactNode
}
export const makeThemeProvider = ({ children }: Props): ReactElement => (
  <ThemeProvider>{children}</ThemeProvider>
)
