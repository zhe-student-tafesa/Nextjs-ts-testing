import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />)
    cy.contains('0')
    cy.get('[data-id="counter-number"]').should('have.text', '0')

    cy.get('[data-id="plus-count-btn"]').click()
    cy.get('[data-id="plus-count-btn"]').click()
    cy.get('[data-id="counter-number"]').should('have.text', '2')

    cy.get('[data-id="minus-count-btn"]').click()
    cy.get('[data-id="counter-number"]').should('have.text', '1')


  })
})