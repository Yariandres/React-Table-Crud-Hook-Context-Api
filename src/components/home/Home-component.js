import React from 'react';
import { Heading } from '../heading/Heading-component';
import { UserList } from '../userList/UserList-component';


export const Home = () => {
  return (
    <div>
      <Heading />
      <UserList />
    </div>
  )
}
