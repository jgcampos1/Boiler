import { ButtonTypesEnum } from '~/app/presentation/common/enums'

export interface ButtonProps {
  /**
   * Title of button
   */
  title?: string
  /**
   * Type of button
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   *  Button style type
   */
  buttonStyle?: ButtonTypesEnum
  /**
   *  When true does not allow any action on the button
   */
  disabled?: boolean
  /**
   *  Loading status of button when applied show spinner component
   */
  loading?: boolean
  /**
   *  Icon that is applied to the right corner of the button
   */
  startIcon?: React.ReactNode
  /**
   * This icon is applied when there is no title
   */
  endIcon?: React.ReactNode
  /**
   * This icon is applied when there is no title
   */
  icon?: React.ReactNode
  /**
   * Disable margin top of button
   */
  disabledMarginTop?: boolean
  /**
   * Outline border and text color of button
   */
  outlinedColor?: string
  /**
   * Width of button
   */
  width?: number
  /**
   * icon of button
   */
  iconButton?: boolean
  /**
   * disable button title when screen size is less than 1230px
   */
  disabledTitleMobile?: boolean
  /**
   * font weight of button when button is outline default is 700
   */
  outlinedWeight?: number
  /**
   * onClick function of button
   */
  onClick?: () => void
  /**
   * button icon color
   */
  iconColor?: string
  /**
   * button font weight
   */
  fontWeight?: number
  /**
   * button's className
   */
  className?: string
  dataTestId?: string
}
