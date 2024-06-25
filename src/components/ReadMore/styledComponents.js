// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 750px;
`

export const Heading = styled.h1`
  font-size: 30px;
  text-align: center;
  font-family: 'Roboto';
`
export const SubHeading = styled.p`
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 30px;
`
export const CardContainer = styled.div`
  width: 100%;
`
export const ReactHookImage = styled.img`
  width: 100%;
`
export const ReactHooksDescription = styled.p`
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: ${props => props.displayText};
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 30px;
`

export const ReadMoreButton = styled.button`
  color: white;
  background-color: blue;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 600;
`
