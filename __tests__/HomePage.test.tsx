import HomePage from '../src/app/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
 
 
describe('HomePage', () => {
  it('renders a heading', () => {
    // AAA

    // Arrange
    render(<HomePage />)
 
    // Act
    const heading = screen.getByRole('heading', { level: 1 })
 
    // Assert
    expect(heading).toBeInTheDocument()
  })
})