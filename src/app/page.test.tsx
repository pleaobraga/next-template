import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home component', () => {
  it('renders the heading and paragraph', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /welcome to next\.js template/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /this is a starter template for next\.js applications\./i
      )
    ).toBeInTheDocument()
  })
})
