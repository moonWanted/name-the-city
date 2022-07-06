describe('renders the main component', () => {
  it('renders correctly', () => {
    cy.visit('/')
  })

  it('renders header', () => {
    cy.contains('Name the City')
  })

  it('input city name from the list', () => {
    cy.get('[data-testid="name-input"]')
      .type('London{enter}')
      .should('have.value', '')
  })

  it('add city name to top table', () => {
    cy.get('table').contains('td', 'London');
  })

  it('show right result after time over', () => {
    cy.wait(120000)
    cy.contains('Your result 1 cities with total population 8961989')
  })
})