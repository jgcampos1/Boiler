import { type ReactNode } from 'react'

export type ThemeContextType = {
  toggleTheme: () => void
  mode: string | ReactNode
} | null
