import React from 'react'
import {ServiceProvider} from '../../components/ServiceProvider'
import { MainLayout } from '../../layouts/MainLayout'
import { Container } from './styles'

export const Sheduling = () => {
  return (
    <MainLayout title="Dashboard">
      <Container>
        <h2>Selecione o profissional</h2>
        <ServiceProvider />
      </Container>
    </MainLayout>
  )
}
