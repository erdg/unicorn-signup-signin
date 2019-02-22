import React from 'react'
import EntryForm from './EntryForm'
import Typography from '@material-ui/core/Typography'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from '@material-ui/core/Button'

class Signup extends React.Component {

   state = {
      email: '',
      passw: ''
   }

   render() {
      return (
         <EntryForm>
            <Typography component="h4" variant="h4" gutterBottom >
               Sign Up
            </Typography>
            <EmailInput
               id="signup-email"
               name="email"
               value={this.state.email}
               onChange={this.onChange}
               style={{marginBottom: 8}}
            />
            <PasswordInput
               id="signup-passw"
               name="passw"
               value={this.state.passw}
               onChange={this.onChange}
               style={{marginBottom: 8}}
            />
            <Button variant="contained" color="primary" type="submit" >
               Sign Up
            </Button>
         </EntryForm>
      )
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }
}

export default Signup
