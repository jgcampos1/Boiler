import { DefaultLayout, ProtectLayout } from '~/app/presentation/layout'

export const LayoutConfig = {
  DefaultLayout: {
    name: 'DefaultLayout',
    component: DefaultLayout
  },
  ProtectLayout: {
    name: 'ProtectLayout',
    component: ProtectLayout
  }
} as const
