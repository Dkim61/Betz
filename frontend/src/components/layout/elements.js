import { withStyles } from '@mui/styles';
import { TextField } from '@mui/material';


export const CssTextField = withStyles( theme => ({
  root: {
    '& > *': {
        color: 'black',
        textAlign: 'center',
        fontSize: '1.2rem'
    },
    '& label': {
        color: theme.palette.primary.main,
    },
    '& label.Mui-focused': {
        color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            color: 'white',
            borderColor: theme.palette.primary.main,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
},
}))(TextField);