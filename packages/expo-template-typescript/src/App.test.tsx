import React from 'react'
import { render } from '@testing-library/react-native'
import App from './App'

describe('App', () => {
  it('renders', () => {
    const { asJSON } = render(<App />)
    expect(asJSON()).toMatchSnapshot()
  })
})
