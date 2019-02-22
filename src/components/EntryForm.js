import React from 'react'
import Paper from '@material-ui/core/Paper'

// sign-up/sign-in form component
//
// form fields in 'Paper' component, horizontally centered in viewport
function EntryForm(props) {
   return (
      <div
         style={{
            display: 'flex',
            marginTop: 48
         }}
      >
         <form
            style={{
               margin: '0 auto'
            }}
         >
            <Paper
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 16,
                  minWidth: 250
               }}
            >
               {props.children}
            </Paper>
         </form>
      </div>
   )
}

export default EntryForm
