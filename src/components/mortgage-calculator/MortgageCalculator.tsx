'use client'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import ComboBox from '../ui/combobox'
import loanTerms from '@/constants/loanTerms'

const MortgageCalculator = () => {
  const [selectedLoanTerm, setSelectedLoanTerm] = useState('')

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
        type="number"
      />

      <Label htmlFor="interestRate" className="font-semibold">
        Anual Interest Rate
      </Label>
      <Input
        id="interestRate"
        className="mt-1"
        placeholder="Enter Anual Interest Rate"
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
    </section>
  )
}

export default MortgageCalculator
