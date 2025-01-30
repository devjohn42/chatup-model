import React from 'react'
import './list.css'
import ChatList from './ui/chat-list/chat-list'
import UserInfo from './ui/user-info/user-info'

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List
