import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const CreditNoteApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.CREDIT_NOTES.LOAD_CREDIT_NOTES).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.UPDATE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.LOAD_NOTES).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.ADD_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.DELETE_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.UPDATE_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.UPDATE_NOTE_PIN).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.LOAD_CREDIT_NOTE_PDF).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.LOAD_CREDIT_NOTE_REASONS).toDynamicValue(
    () => makeApiUrl('credit-note-reasons')
  )
  bind<string>(ApiTypes.CREDIT_NOTES.ISSUE_CREDIT_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
})
