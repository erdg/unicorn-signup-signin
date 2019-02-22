import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#eb5490'
      },
      secondary: {
         main: '#51ad9c'
      },
      text: {
         primary: '#494939'
      }
   },
   typography: {
      useNextVariants: true
   }
})

export default theme
