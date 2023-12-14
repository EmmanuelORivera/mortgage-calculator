'use client'
import { useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import ComboBox from '../ui/combobox'
import loanTerms from '@/constants/loanTerms'
import { mortgagePayments } from '@/lib/utils'

const MortgageCalculator = () => {
  const [selectedLoanTerm, setSelectedLoanTerm] = useState('')
  const [principalLoan, setPrincipalLoan] = useState('')
  const [annualInterestRate, setAnnualInterestRate] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    if (selectedLoanTerm && principalLoan && annualInterestRate) {
      const monthlyPayment = mortgagePayments(
        Number(principalLoan),
        Number(annualInterestRate),
        Number(selectedLoanTerm)
      )

      setMonthlyPayment(monthlyPayment)
    }
  }, [selectedLoanTerm, principalLoan, annualInterestRate])

  const handleAnnualInterestRateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setAnnualInterestRate(value)
    }
  }
  return (
    <section>
      <h2 className="text-2xl my-4 font-bold">Mortgage Calculator</h2>
      <Label htmlFor="loan" className="font-semibold">
        Principal Loan Amount
      </Label>
      <Input
        id="loan"
        className="mt-1"
        placeholder="Enter Principal Loan Amount"
        value={principalLoan}
        onChange={(e) => setPrincipalLoan(e.target.value)}
        type="number"
      />

      <Label htmlFor="interestRate" className="font-semibold">
        Annual Interest Rate (%)
      </Label>
      <Input
        id="interestRate"
        className="mt-1"
        placeholder="Enter Annual Interest Rate"
        value={annualInterestRate}
        onChange={handleAnnualInterestRateChange}
        type="number"
      />

      <Label htmlFor="loanTerm" className="font-semibold">
        Loan Term
      </Label>
      <ComboBox
        id="loanTerm"
        options={loanTerms}
        inputPlaceholder="Select Loan Term..."
        searchPlaceholder="Search Loan Term..."
        value={selectedLoanTerm}
        setValue={setSelectedLoanTerm}
      />

      <p className="uppercase tracking-wider mt-8 text-right">
        <span className="font-bold">Monthly Payment:</span> ${monthlyPayment}
      </p>
    </section>
  )
}

export default MortgageCalculator
