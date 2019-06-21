import React from 'react'
import styled from 'styled-components/native'
import i18n from 'i18n-js'
import { StatusBar } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: #1c2225;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Title>{i18n.t('BROLOLO')}</Title>
    </Container>
  )
}
