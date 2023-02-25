import { ContainerModule } from 'inversify'
import { ValidationTypes } from '~/ioc/types/validation'

import {
  ValidationBuilder,
  ValidationComposite
} from '~/app/presentation/validation/validators'

import { Validation } from '~/app/presentation/common/protocols'

export const AuthValidationModule = new ContainerModule((bind) => {
  bind<Validation>(ValidationTypes.AUTH.SIGN_IN_FORM).toConstantValue(
    ValidationComposite.build([
      ...ValidationBuilder.field('email').email().required().build(),
      ...ValidationBuilder.field('password').required().minLength(8).build()
    ])
  )
  bind<Validation>(ValidationTypes.AUTH.FORGOT_PASSWORD_FORM).toConstantValue(
    ValidationComposite.build([
      ...ValidationBuilder.field('email').email().required().build()
    ])
  )
})
