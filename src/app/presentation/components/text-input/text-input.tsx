import React, { memo, ReactNode } from 'react'
import { Controller, Control } from 'react-hook-form'

import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
  Typography,
  Box,
  Tooltip
} from '@material-ui/core'
import clsx from 'clsx'

import { ValidationErrorType } from '~/app/presentation/common/protocols'
import { MaskOptions } from '~/app/presentation/common/types'
import { useTranslation, useMaskFormatter } from '~/app/presentation/hooks'

import { useStyles } from './text-input-styles'
import { InfoIcon } from '../icons'

type Props = Omit<TextFieldProps, 'label' | 'onChange'> & {
  label?: string
  name: string
  tooltip?: string
  symbol?: string | ReactNode
  symbolLeft?: boolean
  paddingRightSymbol?: number
  paddingLeftLargeSymbol?: boolean
  paddingLeftMediumSymbol?: boolean
  paddingLeftSmallSymbol?: boolean
  isMaxContent?: boolean
  icon?: ReactNode
  required?: boolean
  optional?: boolean
  isLabelBold?: boolean
  badge?: ReactNode
  control?: Control<any>
  isEventChange?: boolean
  isLabelColorPrimary?: boolean
  inputWidth?: number
  mask?: {
    type: MaskOptions
    mode: 'onChange' | 'onBlur'
  }
  onBlur?: (value: string) => void
  onChange?: (value: string | React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  label,
  required,
  name,
  tooltip,
  onChange,
  onBlur,
  mask,
  optional,
  control,
  size,
  fullWidth,
  helperText,
  isLabelBold,
  badge,
  symbol,
  symbolLeft,
  paddingRightSymbol,
  paddingLeftLargeSymbol,
  paddingLeftMediumSymbol,
  paddingLeftSmallSymbol,
  isEventChange,
  isMaxContent,
  isLabelColorPrimary,
  inputWidth,
  ...inputProps
}: Props) => {
  const maskFormatter = useMaskFormatter(mask?.type)
  const classes = useStyles({
    optional,
    multiline: inputProps.multiline,
    paddingRightSymbol,
    isMaxContent,
    isLabelColorPrimary,
    inputWidth,
    isLabelBold
  })
  const { translate } = useTranslation()

  return (
    <Controller
      defaultValue=''
      rules={{ required }}
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => {
        const errorState = error as unknown as ValidationErrorType

        const errorMessage = errorState?.name ?? errorState?.message ?? ''
        const errorOption = errorState?.option
        const value = field.value ?? ''

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (mask?.mode === 'onChange') {
            const formattedValue = maskFormatter?.format(event.target.value)
            event.target.value = formattedValue ?? event.target.value
          }
          if (!isEventChange) {
            onChange?.(event.target.value)
            field.onChange(event.target.value)
          } else {
            onChange?.(event)
            field.onChange(event)
          }
        }

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
          onBlur?.(event?.target?.value)
          field.onBlur()
        }

        const onWheel = (event: React.WheelEvent<HTMLInputElement>) => {
          // @ts-expect-error
          event.target?.blur()
          event.stopPropagation()
        }

        return (
          <FormControl
            variant='outlined'
            className={classes.formControl}
            fullWidth={fullWidth}
          >
            {label && (
              <Box display='flex' alignItems='center' mb={1}>
                <Typography className={classes.fieldName}>
                  {translate(label)}
                  {badge && badge}
                </Typography>
                {tooltip && (
                  <Tooltip className={classes.formControlTip} title={tooltip}>
                    <InfoIcon />
                  </Tooltip>
                )}
              </Box>
            )}

            {symbol && (
              <Box
                className={clsx(
                  classes.symbol,
                  symbolLeft && classes.symbolLeft
                )}
                component='span'
              >
                {symbol}
              </Box>
            )}
            <TextField
              variant='outlined'
              size={size}
              {...inputProps}
              {...field}
              onWheel={onWheel}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
              className={clsx(classes.input, {
                [classes.inputSymbolLeft]: symbolLeft,
                [classes.inputSymbol]: symbol,
                [classes.paddingRightSymbol]: paddingRightSymbol,
                [classes.paddingLeftLargeSymbol]: paddingLeftLargeSymbol,
                [classes.paddingLeftMediumSymbol]: paddingLeftMediumSymbol,
                [classes.paddingLeftSmallSymbol]: paddingLeftSmallSymbol
              })}
              helperText={
                typeof helperText === 'string'
                  ? translate(helperText)
                  : helperText
              }
              inputProps={{ 'aria-label': label, ...inputProps.inputProps }}
            />

            {invalid && (
              <FormHelperText className={classes.errorHelperText}>
                {translate(errorMessage, errorOption)}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}

export default memo(TextInput)
