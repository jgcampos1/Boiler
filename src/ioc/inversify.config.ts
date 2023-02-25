import 'reflect-metadata'
import { Container } from 'inversify'

import {
  InfraModule,
  ApiModule,
  ValidationModule,
  ConstantsModule
} from './modules'

const container = new Container()

container.load(
  ...ApiModule,
  ...InfraModule,
  ...ValidationModule,
  ...ConstantsModule
)

export { container }
