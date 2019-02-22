import React, { useState } from 'react'
import EntryForm from './EntryForm'
import Typography from '@material-ui/core/Typography'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from '@material-ui/core/Button'

function SignUp() {

   const [email, setEmail] = useState('')
   const [passw, setPassw] = useState('')

   return (
      <EntryForm>
         <Typography component="h4" variant="h4" gutterBottom >
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
