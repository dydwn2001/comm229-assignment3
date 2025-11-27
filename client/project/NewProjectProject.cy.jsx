import React from 'react'
import Project from './NewProject'

describe('<Project />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Project />)
  })
})