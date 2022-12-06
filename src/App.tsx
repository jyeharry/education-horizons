import styled from 'styled-components'
import { shuffle } from 'lodash'

interface ColourBoxProps {
  red: number
  green: number
  blue: number
  'data-testid': string
}

const ColourBox = styled.div.attrs<ColourBoxProps>(({ red, green, blue }) => ({
  style: {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  },
}))<ColourBoxProps>`
  height: 30px;
  width: 30px;
  display: inline-block;
`

function App() {
  const values: JSX.Element[] = []
  let counter = 0

  // css rgb colours are from 0-255, so start at 7 and increment by 8 to get 32 values between 7-255
  for (let red = 7; red <= 255; red += 8) {
    for (let green = 7; green <= 255; green += 8) {
      for (let blue = 7; blue <= 255; blue += 8) {
        values.push(
          <ColourBox
            red={red}
            green={green}
            blue={blue}
            key={counter++}
            data-testid="colour"
          />,
        )
      }
    }
  }
  return <>{shuffle(values)}</>
}

export default App
