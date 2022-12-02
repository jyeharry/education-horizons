import styled from 'styled-components'

interface RGB {
  red: number
  green: number
  blue: number
}

interface ColourBoxProps extends RGB {}

interface Cache {
  [k: string]: { red: number; green: number; blue: number }
}

const ColourBox = styled.div.attrs<ColourBoxProps>(({red, green, blue}) => ({
  style: {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }
}))<ColourBoxProps>`
  height: 30px;
  width: 30px;
  display: inline-block;
`

function App() {
  const values: RGB[] = []
  for (let red = 7; red <= 255; red += 8) {
    for (let green = 7; green <= 255; green += 8) {
      for (let blue = 7; blue <= 255; blue += 8) {
        values.push({red, green, blue})
      }
    }
  }

  return (
    <>
      {values.map(({red, green, blue}, i) => {
        return (
          <ColourBox red={red} green={green} blue={blue} key={i}>
          </ColourBox>
        )
      })}
    </>
  )
}

export default App
