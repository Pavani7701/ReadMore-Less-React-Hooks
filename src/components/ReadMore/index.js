// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  MainContainer,
  Heading,
  SubHeading,
  CardContainer,
  ReactHookImage,
  ReactHooksDescription,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const [isDisplay, setDisplay] = useState(false)
  const {reactHooksDescription} = props
  const onClickReadMore = () => {
    setDisplay(prevState => !prevState)
  }
  const ChangeBtnText = isDisplay ? 'Read Less' : 'Read More'
  const displayText = isDisplay ? 'none' : 4
  const description = isDisplay
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <AppContainer>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to React</SubHeading>
        <CardContainer>
          <ReactHookImage
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <ReactHooksDescription displayText={displayText}>
            {description}
          </ReactHooksDescription>
        </CardContainer>
        <ReadMoreButton onClick={onClickReadMore}>
          {ChangeBtnText}
        </ReadMoreButton>
      </MainContainer>
    </AppContainer>
  )
}

export default ReadMore
