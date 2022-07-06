context('renders timer', () => {
  it('renders correctly', () => {
    cy.visit('/')
  })

  it('renders timer header', () => {
    cy.contains('Countdown')
  })

  it('time over after 2 minutes', () => {
    cy.wait(120000)
    cy.contains('Time over')
  })

})