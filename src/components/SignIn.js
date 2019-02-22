import React, { useState } from 'react'
import EntryForm from './EntryForm'
import Typography from '@material-ui/core/Typography'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from '@material-ui/core/Button'

function SignIn() {

   const [email, setEmail] = useState('')
   const [passw, setPassw] = useState('')

   return (
      <EntryForm>
         <Typography component="h4" variant="h4" gutterBottom >
            Sign In
         </Typography>
         <EmailInput
            id="signin-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{marginBottom: 8}}
         />
         <PasswordInput
            id="signin-passw"
            name="passw"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
            style={{marginBottom: 8}}
         />
         <Button variant="contained" color="primary" type="submit" >
            Sign In
         </Button>
      </EntryForm>
   )

}

export default SignIn
