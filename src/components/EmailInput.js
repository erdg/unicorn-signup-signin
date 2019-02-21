import React from 'react'
import TextField from '@material-ui/core/TextField'

function EmailInput(props) {
   return (
      <TextField
         id={props.id}
         label="Email"
         name={props.name}
         type="email"
         value={props.value}
         onChange={props.onChange}
         variant="outlined"
         style={props.style}
      />
   )
}

export default EmailInput
