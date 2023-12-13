import { render, screen } from '@testing-library/react'
import MortgageCalculator from './MortgageCalculator'
describe('MortgageCalculator', () => {
  it('should render the component without a problem', () => {
    render(<MortgageCalculator />)
  })

  it('should render a Principal loan amount field (Amount of the mortgage)', () => {})
})
