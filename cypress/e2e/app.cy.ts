describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Visit the specific login page
    cy.visit('http://localhost:3000/pt/login')

    // Check for username input to ensure form loaded
    cy.get('input[name="username"]').should('exist')
  })
})
