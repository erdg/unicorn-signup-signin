import React, { useState, useEffect } from 'react'
import theme from '../theme'
import EntryForm from '../components/EntryForm'
import Typography from '@material-ui/core/Typography'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Button from '@material-ui/core/Button'

function SignUp() {

   const [email, setEmail] = useState('')
   const [passw, setPassw] = useState('')

   useEffect(() => {
      document.body.style.backgroundColor = theme.palette.secondary.main
      return () => {
         document.body.style.backgroundColor = 'white'
      }
   })

   return (
      <EntryForm>
         <Typography variant="h4" gutterBottom >
            Sign Up
         </Typography>
         <EmailInput
            id="signup-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{marginBottom: 8}}
         />
         <PasswordInput
            id="signup-passw"
            name="passw"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
            style={{marginBottom: 8}}
         />
         <Button variant="contained" color="primary" type="submit" >
            Sign Up
         </Button>
      </EntryForm>
   )

}

export default SignUp
