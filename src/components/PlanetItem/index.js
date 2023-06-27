// Write your code here

import {
  PlanetContainer,
  Image,
  HeadingText,
  Description,
} from './styledComponents'

const PlanetItem = props => {
  const {planetList} = props
  const {imageUrl, name, description} = planetList

  return (
    <PlanetContainer>
      <Image src={imageUrl} alt={`planet ${name}`} className="image" />
      <HeadingText>{name}</HeadingText>
      <Description>{description}</Description>
    </PlanetContainer>
  )
}

export default PlanetItem
