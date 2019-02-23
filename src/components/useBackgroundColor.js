// useBackgroundColor.js
import { useEffect } from 'react'

// sets document.body.style.backgroundColor to color on mount
// sets ... to white on unmount
function useBackgroundColor(color) {
   useEffect(() => {
      document.body.style.backgroundColor = color
      return () => {
         document.body.style.backgroundColor = 'white'
      }
   })
}

export default useBackgroundColor
