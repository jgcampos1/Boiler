import { useMemo } from 'react'

import {
  CircularProgress,
  Button as ButtonMui,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'

import { useStyles } from './button-styles'
import { ButtonProps } from './types'

const Button = ({
  title,
  type,
  buttonStyle,
  disabled,
  loading,
  startIcon,
  endIcon,
  disabledMarginTop,
  outlinedColor,
  outlinedWeight = 700,
  disabledTitleMobile,
  onClick,
  icon,
  iconButton,
  width,
  iconColor,
  fontWeight,
  className,
  dataTestId
}: ButtonProps) => {
  const classes = useStyles({
    disabledMarginTop,
    outlinedColor,
    outlinedWeight,
    width,
    disabledTitleMobile,
    fontWeight,
    iconColor
  })

  const classTypeButton = useMemo(() => {
    const types = {
      addType: `${clsx(classes.button, classes.addTypeButton)}`,
      removeType: `${clsx(classes.button, classes.removeTypeButton)}`,
      textType: classes.textTypeButton,
      backType: classes.backTypeButton,
      outlinedType: classes.outlinedType,
      iconButton: classes.iconButton,
      orderButton: classes.orderButton
    }

    return (
      types[buttonStyle] ?? `${(classes.defaultTypeButton, classes.button)}`
    )
  }, [buttonStyle])

  return (
    <ButtonMui
      type={type ?? 'button'}
      className={clsx(className, classTypeButton)}
      disabled={disabled || loading}
      {...{ endIcon, startIcon, onClick }}
      data-testid={dataTestId}
    >
      {!loading && !iconButton && !disabledTitleMobile ? (
        <Typography variant='button' className={classes.buttonTitle}>
          {title}
        </Typography>
      ) : (
        icon
      )}
      {loading && (
        <CircularProgress size={19} className={classes.containedLoading} />
      )}
    </ButtonMui>
  )
}

export default Button
