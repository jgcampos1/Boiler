import { useEffect } from 'react'
import {
  useForm as useFormRHF,
  Resolver,
  FieldValues,
  DefaultValues
} from 'react-hook-form'

import { Validation } from '../common/protocols'
import { useValidationResolver } from './index'

export type UseFormParams<T> = {
  validationSchema?: Validation
  mode?: 'all' | 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched'
  defaultValues?: DefaultValues<T>
}

export const useForm = <T extends FieldValues>({
  defaultValues,
  mode,
  validationSchema
}: UseFormParams<T> = {}) => {
  const resolver = useValidationResolver(
    validationSchema
  ) as unknown as Resolver<T, object>
  const methods = useFormRHF<T>({
    resolver,
    mode
  })

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues)
    }
  }, [defaultValues])

  return methods
}
