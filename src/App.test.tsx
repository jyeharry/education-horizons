import { render, screen } from '@testing-library/react'
import { uniqBy } from 'lodash'
import App from './App'

test('renders 32768 unique colours to the page', async () => {
  render(<App />)
  const colours = await screen.findAllByTestId('colour')
  expect(uniqBy(colours, 'style.backgroundColor')).toHaveLength(32768)
})
