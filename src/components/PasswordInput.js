import React from 'react'
import TextField from '@material-ui/core/TextField'

function  PasswordInput(props) {
   return (
      <TextField
         id={props.id}
         label="Password"
         name={props.name}
         type="password"
         value={props.value}
         onChange={props.onChange}
         variant="outlined"
         style={props.style}
      />
   )
}

export default PasswordInput
