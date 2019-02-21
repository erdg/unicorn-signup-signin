import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function LandingPage() {
   return (
      <div>
         <Typography component="h1" variant="h1" align="center" gutterBottom style={{marginTop: 48}}>
            Unicorn
         </Typography>
         <Typography variant="subtitle1" align="center" gutterBottom >
            disrupting the world with revolutionary technology
         </Typography>
         <div
            style={{
               display: 'flex',
               marginTop: 16 
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 auto'
               }}
            >
               <Button variant="contained" color="primary" component={Link} to="/signup" style={{margin: '8px 0px'}}>
                  Sign Up
               </Button>
               <Button variant="outlined" color="primary" component={Link} to="/signin" >
                  Sign In
               </Button>
            </div>
         </div>
      </div>
   )
}

export default LandingPage
