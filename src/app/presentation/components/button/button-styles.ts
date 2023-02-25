import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { Colors } from '~/app/presentation/styles/colors'

type ButtonProps = {
  disabledMarginTop?: boolean
  outlinedColor?: string
  outlinedWeight?: number
  width?: number
  disabledTitleMobile?: boolean
  iconColor?: string
  fontWeight?: number
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      maxWidth: 300,
      minHeight: 36,
      padding: theme.spacing(0.4, 1.3),
      borderRadius: 5,
      color: 'rgb(64, 68, 82)',
      display: 'flex',
      alignItems: 'center',
      transition: '0.2s ease-in-out',
      fontSize: theme.typography.button.fontSize,
      marginTop: ({ disabledMarginTop }: ButtonProps) =>
        disabledMarginTop ? 0 : 20,
      width: ({ width }: ButtonProps) => width ?? 'max-content',
      border: 'none',
      background: theme.palette.common.white,
      '&:hover': {
        cursor: 'pointer',
        boxShadow:
          'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(64 68 82 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px, rgb(64 68 82 / 8%) 0px 2px 5px 0px'
      },
      '& > .MuiButton-label': {
        marginRight: 4,
        fontSize: theme.typography.button.fontSize,
        lineHeight: '22px'
      },
      '&:disabled': {
        opacity: 0.5
      },
      '& svg': {
        fontSize: '16px !important'
      }
    },

    textTypeButton: {
      color: theme.palette.primary.main,
      border: 'none',
      background: 'none',
      boxShadow: 'none',
      fontWeight: 500,
      '&:hover': {
        color: theme.palette.common.black,
        background: 'none',
        boxShadow: 'none',

        '& > .MuiButton-label': {
          '& > .MuiButton-startIcon, & > .MuiButton-endIcon': {
            '& > svg': {
              fill: theme.palette.common.black,
              width: 20,
              height: 20
            }
          }
        }
      },
      '& .MuiCircularProgress-root': {
        color: theme.palette.primary.main
      },
      '&:disabled': {
        color: theme.palette.primary.main,
        opacity: 0.5
      },
      '& > .MuiButton-label': {
        '& > .MuiButton-startIcon, & > .MuiButton-endIcon': {
          '& > svg': {
            fill: theme.palette.primary.main,
            width: 20,
            height: 20
          }
        }
      }
    },
    addTypeButton: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: 500,
      '& > .MuiButton-label': {
        '& > .MuiButton-startIcon': {
          '& > svg': {
            fill: theme.palette.common.white,
            width: 17,
            height: 17,
            marginRight: ({ disabledTitleMobile }: ButtonProps) =>
              disabledTitleMobile && theme.spacing(-2)
          }
        }
      },

      '&:disabled': {
        color: theme.palette.common.white,
        opacity: 0.5
      },
      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        opacity: 0.9
      }
    },
    removeTypeButton: {
      background: '#df1b41',
      color: theme.palette.common.white,
      '& > .MuiButton-label': {
        '& > .MuiButton-startIcon': {
          '& > svg': {
            fill: theme.palette.common.white,
            width: 17,
            height: 17
          }
        }
      },

      '&:hover': {
        background: '#df1b41',
        color: theme.palette.common.white,
        opacity: 0.9
      },
      '&:disabled': {
        color: theme.palette.common.white,
        opacity: 0.5
      }
    },
    containedLoading: {
      color: theme.palette.common.white,
      '& > svg': {
        width: 19
      }
    },
    defaultTypeButton: {
      color: 'rgb(64, 68, 82)',
      '& .MuiCircularProgress-root': {
        color: 'rgb(64, 68, 82)'
      }
    },
    backTypeButton: {
      color: theme.palette.text.secondary,
      border: '1px solid #8093AD',
      width: ({ width }: ButtonProps) => width ?? 'max-content',
      padding: theme.spacing(0.4, 1.3),
      '& svg': {
        fill: theme.palette.text.secondary,
        width: theme.spacing(2)
      },
      '& .MuiCircularProgress-root': {
        color: theme.palette.text.secondary
      },
      '&:disabled': {
        color: theme.palette.text.secondary,
        opacity: 0.5
      }
    },
    outlinedType: {
      width: 'auto',
      padding: '3px 20px',
      height: theme.typography.pxToRem(36),
      color: ({ outlinedColor }: ButtonProps) =>
        outlinedColor ?? theme.palette.text.secondary,
      fontSize: theme.typography.button.fontSize,
      fontWeight: ({ outlinedWeight }: ButtonProps) => outlinedWeight || 500,
      border: '1px solid',
      borderColor: ({ outlinedColor }: ButtonProps) =>
        outlinedColor ?? theme.palette.text.secondary,
      '& > .MuiButton-label': {
        '& > .MuiButton-startIcon': {
          '& > svg': {
            fill: ({ outlinedColor }: ButtonProps) =>
              outlinedColor ?? theme.palette.text.secondary,
            width: 17,
            height: 17,
            marginRight: ({ disabledTitleMobile }: ButtonProps) =>
              disabledTitleMobile && theme.spacing(-2)
          }
        }
      },
      '& .MuiCircularProgress-root': {
        color: ({ outlinedColor }: ButtonProps) =>
          outlinedColor ?? theme.palette.text.secondary
      },
      '&:disabled': {
        color: ({ outlinedColor }: ButtonProps) =>
          outlinedColor ?? theme.palette.text.secondary,
        opacity: 0.5
      }
    },
    iconButton: {
      border: 0,
      background: 'transparent',
      height: 36,
      '& > .MuiButton-label': {
        '& > p': {
          fontWeight: ({ fontWeight }: ButtonProps) => fontWeight ?? 400
        },
        '& > .MuiButton-startIcon': {
          '& > svg': {
            fill: ({ iconColor }: ButtonProps) =>
              iconColor ?? theme.palette.text.secondary,
            width: 17,
            height: 17,
            marginRight: ({ disabledTitleMobile }: ButtonProps) =>
              disabledTitleMobile && theme.spacing(-2)
          }
        }
      }
    },
    orderButton: {
      background: Colors.Primary,
      boxShadow: '0px 4px 20px #CDCEFF',
      height: 40,
      minWidth: 190,
      width: 150,
      border: 'none',
      margin: '40px auto 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:disabled': {
        opacity: '0.5'
      },
      '& > .MuiButton-label': {
        fontWeight: '700!important',
        color: '#fff'
      },
      '&:hover': {
        background: Colors.Primary
      }
    },
    buttonTitle: {
      textTransform: 'capitalize'
    }
  })
)
