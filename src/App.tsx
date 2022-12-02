import styled  from 'styled-components'
import { shuffle } from 'lodash'

interface ColourBoxProps {
  red: number
  green: number
  blue: number
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
  const data = Array.from({ length: 32 }).map((_, i) => i * 8 + 7)
  data.forEach((red) => {
    data.forEach((green) => {
      data.forEach((blue) => {
        values.push(
          <ColourBox red={red} green={green} blue={blue} key={counter++} />,
        )
      })
    })
  })
  return (
    <>
      {shuffle(values)}
    </>
  )
}

export default App
