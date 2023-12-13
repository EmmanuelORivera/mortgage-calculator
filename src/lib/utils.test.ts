import { mortgagePayments } from './utils'

describe('morgagePayments function', () => {
  it('should calculate monthly payment correctly for a 30-year loan at 5%', () => {
    const principalLoanAmount = 100000
    const yearlyInterestRatePercentage = 5
    const loanTermInYears = 30

    const result = mortgagePayments(
      principalLoanAmount,
      yearlyInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('536.82')
  })

  it('should calculate monthly payment correctly for a 15-year loan at 4%', () => {
    const principalLoanAmount = 150000
    const yearlyInterestRatePercentage = 4
    const loanTermInYears = 15

    const result = mortgagePayments(
      principalLoanAmount,
      yearlyInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('1109.53')
  })

  it('should calculate monthly payment correctly for a 30-year loan at 2%', () => {
    const principalLoanAmount = 125000
    const yearlyInterestRatePercentage = 2
    const loanTermInYears = 15

    const result = mortgagePayments(
      principalLoanAmount,
      yearlyInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('804.39')
  })

  it('should calculate monthly payment correctly for a 15-year loan at 2%', () => {
    const principalLoanAmount = 225000
    const yearlyInterestRatePercentage = 7
    const loanTermInYears = 10

    const result = mortgagePayments(
      principalLoanAmount,
      yearlyInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('2612.44')
  })
})
