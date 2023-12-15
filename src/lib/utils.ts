import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mortgagePayments(
  principalLoanAmount: number,
  annualInterestRatePercentage: number,
  loanTermInYears: number
): number {
  const totalOfMonths = 12

  if (annualInterestRatePercentage === 0) {
    return Number(
      (principalLoanAmount / (loanTermInYears * totalOfMonths)).toFixed(2)
    )
  }

  const monthlyInterestRate = annualInterestRatePercentage / totalOfMonths / 100
  const totalOfPayments = loanTermInYears * totalOfMonths

  return Number(
    (
      (principalLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalOfPayments) - 1)
    ).toFixed(2)
  )
}
