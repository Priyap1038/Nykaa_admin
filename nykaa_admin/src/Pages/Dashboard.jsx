import React from 'react'
import { Container } from '@chakra-ui/react';
import Sidebar from "../Components/Sidebar"
import MainContainer from '../Components/MainContainer';


const Dashboard = () => {
  return (
    <Container>
      <Sidebar/>
      <MainContainer/>
    </Container>
  )
}

export default Dashboard
