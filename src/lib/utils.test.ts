import { mortgagePayments } from './utils'

describe('morgagePayments function', () => {
  it('should calculate monthly payment correctly for a 30-year loan at 5%', () => {
    const principalLoanAmount = 100000
    const annualInterestRatePercentage = 5
    const loanTermInYears = 30

    const result = mortgagePayments(
      principalLoanAmount,
      annualInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('536.82')
  })

  it('should calculate monthly payment correctly for a 15-year loan at 4%', () => {
    const principalLoanAmount = 150000
    const annualInterestRatePercentage = 4
    const loanTermInYears = 15

    const result = mortgagePayments(
      principalLoanAmount,
      annualInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('1109.53')
  })

  it('should calculate monthly payment correctly for a 30-year loan at 2%', () => {
    const principalLoanAmount = 125000
    const annualInterestRatePercentage = 2
    const loanTermInYears = 15

    const result = mortgagePayments(
      principalLoanAmount,
      annualInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('804.39')
  })

  it('should calculate monthly payment correctly for a 15-year loan at 2%', () => {
    const principalLoanAmount = 225000
    const annualInterestRatePercentage = 7
    const loanTermInYears = 10

    const result = mortgagePayments(
      principalLoanAmount,
      annualInterestRatePercentage,
      loanTermInYears
    )

    expect(result.toFixed(2)).toBe('2612.44')
  })

  it('should handle annualInterestRatePercentage of 0', () => {
    const principalLoanAmount = 425000
    const annualInterestRatePercentage = 0
    const loanTermInYears = 30

    const result = mortgagePayments(
      principalLoanAmount,
      annualInterestRatePercentage,
      loanTermInYears
    )

    expect(result).toBe(1180.56)
  })
})
