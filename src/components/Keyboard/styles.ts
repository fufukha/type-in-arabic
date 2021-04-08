import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  keyboard: {
    background: '#e5e7ec',
    display: 'inline-grid',
    margin: '0 auto 70px auto',
    gridTemplateColumns: 'repeat(58, 11.25px)',
    gridTemplateRows: 'repeat(5, 54px)',
    gridColumnGap: '5px',
    gridRowGap: '5px',
    padding: '20px 25px',
    border: '2px #eceef4 outset ',
    borderRadius: '5px',
  }
}))