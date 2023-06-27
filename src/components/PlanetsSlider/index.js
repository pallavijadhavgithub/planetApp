// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import {PlanetAppContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem planetList={each} key={each.id} />
        ))}
      </Slider>
    </PlanetAppContainer>
  )
}

export default PlanetsSlider
