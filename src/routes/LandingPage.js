import React from 'react'
import Unicorn from '../unicorn.png'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function LandingPage() {
   return (
      <>
         <div
            style={{
               backgroundImage: `url(${Unicorn})`,
               backgroundPosition: '50% 50%',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat',
               margin: '0 auto',
               maxWidth: 800,
               minHeight: 400,
               marginBottom: (
                  // >= 500  -> 16px
                  // 400-500 -> 0px
                  // 340-400 -> -24px
                  // < 340   -> -60px
                  window.innerWidth >= 500 ? 16
                     : (window.innerWidth < 500 && window.innerWidth > 400) ? 0
                        : (window.innerWidth < 340) ? -60
                           : -24
               )
            }}
         />
         <div>
            <Typography
               variant="h3"
               align="center"
               gutterBottom
               style={{
                  color: '#494939',
                  fontSize: (window.innerWidth < 520 ? '8vw' : ''),
               }}
            > unicorn
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
                  <Button
                     variant="contained"
                     component={Link} to="/signup"
                     color="primary"
                     size="small"
                     style={{
                        margin: '8px 0px',
                        // backgroundColor: '#00e300',
                        // backgroundColor: '#eb5490',
                        color: 'white'
                     }}
                  > Sign Up
                  </Button>
                  <Button
                     component={Link} to="/signin"
                     color="secondary"
                     size="small"
                     style={{
                        position: 'absolute',
                        top: 16,
                        right: 16
                        // color: '#eb5490'
                     }}
                  > Sign In
                  </Button>
               </div>
            </div>
         </div>
      </>
   )
}

export default LandingPage
