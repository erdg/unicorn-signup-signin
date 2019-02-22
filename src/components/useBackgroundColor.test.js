import React from 'react'
import { render, cleanup } from 'react-testing-library'
import useBackgroundColor from './useBackgroundColor'

function EmptyDiv() {
   useBackgroundColor('green')
   return <div />
}

describe('useBackgroundColor tests', () => {
   const wrapper = render(<EmptyDiv />)
   it('sets document.body.style.backgroundColor when component mounts', () => {
      expect(document.body.style.backgroundColor).toBe('green')
   })
   it('sets document.body.style.backgroundColor to white when component unmounts', () => {
      cleanup()
      expect(document.body.style.backgroundColor).toBe('white')
   })
})



