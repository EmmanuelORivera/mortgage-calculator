import { render, screen } from '@testing-library/react'
import Home from './page'
describe('Home', () => {
  it('should render the component without a problem', () => {
    render(<Home />)
  })
})
