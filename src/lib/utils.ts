import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mortgagePayments(
  principalLoanAmount: number,
  yearlyInterestRatePercentage: number,
  loanTermInYears: number
): number {
  const totalOfMonths = 12

  const monthlyInterestRate = yearlyInterestRatePercentage / totalOfMonths / 100
  const totalOfPayments = loanTermInYears * totalOfMonths

  return (
    (principalLoanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalOfPayments) - 1)
  )
}
