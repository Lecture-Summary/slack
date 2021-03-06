import React, { useCallback } from 'react'
import ChatBox from '../../components/ChatBox'
import ChatList from '../../components/ChatList'
import useInput from '../../hooks/useInput'
import { Container, Header } from './styles'

const Channel = () => {
  const [chat, onChangeChat] = useInput('')

  const onSubmitForm = useCallback(() => {}, [])

  return (
    <Container>
      <Header>채널!</Header>
      {/* <ChatList /> */}
      <ChatBox
        chat={chat}
        onChangeChat={onChangeChat}
        onSubmitForm={onSubmitForm}
      />
    </Container>
  )
}

export default Channel
