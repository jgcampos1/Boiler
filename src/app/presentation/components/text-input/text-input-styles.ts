import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { Colors } from '~/app/presentation/styles'

type StyleProps = {
  optional?: boolean
  multiline?: boolean
  paddingRightSymbol?: number
  isMaxContent?: boolean
  isLabelColorPrimary?: boolean
  inputWidth?: number
  isLabelBold?: boolean
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fieldName: {
      fontSize: theme.typography.pxToRem(14),
      color: ({ isLabelColorPrimary, isLabelBold }: StyleProps) => {
        if (isLabelBold) return '#123952'

        return isLabelColorPrimary
          ? theme.palette.text.primary
          : theme.palette.text.secondary
      },
      marginBottom: 0,
      fontWeight: ({ isLabelBold }: StyleProps) => (isLabelBold ? 700 : 400),
      display: 'flex',
      alignItems: 'center',
      '& > svg': {
        fontSize: 20,
        marginLeft: 5
      },
      '&:after': {
        content: ({ optional }: StyleProps) =>
          optional ? '"(Optional)"' : "''",
        marginLeft: theme.spacing(0.5),
        marginRight: ({ optional }: StyleProps) =>
          optional ? theme.spacing(0.25) : '0',
        top: 0,
        backgroundColor: 'transparent'
      }
    },
    formControl: {
      width: ({ isMaxContent, inputWidth }) =>
        isMaxContent ? 'max-content' : inputWidth ?? '100%',
      '& > .MuiInputBase-root': {
        '& > .MuiInputAdornment-root': {
          '& > .MuiFormControl-root': {
            border: 'none !important',
            '& > .MuiFormControl-root': {
              border: 'none !important',
              '& > .MuiInputBase-root': {
                border: 'none !important',
                '& > fieldset': {
                  borderColor: 'transparent!important'
                }
              }
            }
          }
        }
      }
    },
    input: {
      height: ({ multiline }: StyleProps) => (multiline ? 'auto' : 'auto'),
      '& > .MuiOutlinedInput-multiline': {
        padding: '0px!important'
      },
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FAFAFA',
        transition: 'all 0.3s ease',
        marginTop: 0,
        '& > input::placeholder': {
          paddingTop: '14px !important'
        },
        '& > input, textarea': {
          padding: '12px',
          maxWidth: ({ inputWidth }) => inputWidth ?? '100%',
          background: '#FAFAFA',
          fontSize: theme.typography.pxToRem(14),
          color: theme.palette.text.secondary,
          border: 0,
          borderRadius: 5
        },
        '& > fieldset': {
          color: theme.palette.text.secondary,
          maxWidth: ({ inputWidth }) => inputWidth ?? '100%',
          fontSize: theme.typography.pxToRem(14),
          borderRadius: 5
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: 0.3,
          borderColor: 'rgba(0, 0, 0, 0.1)'
        },
        '&.Mui-focused fieldset': {
          boxShadow:
            'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(1 150 237 / 16%) 0px 0px 0px 4px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px'
        },
        '& > .MuiSelect-root': {
          padding: '12px !important'
        }
      },
      '& .MuiInputAdornment-positionStart': {
        marginRight: 0,
        '& > .MuiTypography-root': {
          color: theme.palette.text.secondary
        }
      },
      '& .MuiInputAdornment-positionEnd': {
        '& > .MuiTypography-root': {
          color: theme.palette.text.secondary,
          paddingLeft: '10px',
          borderLeft: '1px solid rgba(0, 0, 0, 0.1)'
        },

        '& .MuiFormControl-root': {
          borderColor: 'rgba(0,0,0,0.1)',
          borderWidth: '0.1px',
          borderStyle: 'solid',
          borderRight: '1px !important',
          borderTop: '0 !important',
          borderBottom: '0 !important'
        },
        '& .MuiOutlinedInput-root > .MuiSelect-root': {
          padding: '12px !important'
        }
      },
      '& input[type=number]': {
        '-moz-appearance': 'textfield'
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '& .MuiFormHelperText-contained': {
        margin: 0,
        marginTop: theme.spacing(1)
      }
    },
    errorHelperText: {
      margin: theme.spacing(1, 0),
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.error.main
    },
    symbol: {
      width: 'max-content',
      position: 'absolute',
      bottom: 10,
      zIndex: 99,
      right: 15,
      fontSize: theme.typography.pxToRem(14)
    },
    symbolLeft: {
      left: 12,
      right: 'inherit',
      color: theme.palette.text.secondary
    },

    inputSymbolLeft: {
      '& > .MuiInputBase-root': {
        '& > input': {
          paddingLeft: '30px!important'
        }
      }
    },
    inputSymbol: {
      '& > .MuiInputBase-root': {
        '& > input': {
          paddingRight: '25px !important'
        }
      }
    },
    paddingRightSymbol: {
      '& > .MuiInputBase-root': {
        '& > input': {
          paddingRight: ({ paddingRightSymbol }: StyleProps) =>
            `${paddingRightSymbol}px!important`
        }
      }
    },
    paddingLeftLargeSymbol: {
      '& > .MuiInputBase-root': {
        '& > input': {
          paddingLeft: '50px!important'
        }
      }
    },
    paddingLeftMediumSymbol: {
      '& > .MuiInputBase-root': {
        '& > input': {
          paddingLeft: '30px!important'
        }
      }
    },
    paddingLeftSmallSymbol: {
      '& > .MuiInputBase-root': {
        '& > input': {
          paddingLeft: '20px!important'
        }
      }
    },
    formControlTip: {
      marginLeft: 6,
      fontSize: 18,
      color: Colors.Gray
    }
  })
)
