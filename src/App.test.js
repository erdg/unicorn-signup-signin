import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import App, { AppHistory } from './App'

describe('App Routing', () => {
   const wrapper = render(<App />)
   it('renders the landing page', () => {
      expect(wrapper.getByText('unicorn')).toBeDefined()
   })
   it('renders the signup page', () => {
      // click 'sign up' buton
      fireEvent.click(wrapper.getByText(/sign up/i))
      expect(wrapper.getByText('Sign Up')).toBeDefined()
   })
   it('renders the signin page', () => {
      // route back to landing page
      AppHistory.push('/')
      // click 'sign in' button
      fireEvent.click(wrapper.getByText(/sign in/i))
      expect(wrapper.getByText('Sign In')).toBeDefined()
   })
   afterAll(() => {
      cleanup(wrapper)
   })
})

