describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/pt/login');
  });

  it('should display the login form', () => {
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.contains('button', 'Entrar').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    cy.get('input[name="username"]').type('invaliduser');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.contains('button', 'Entrar').click();
    
    
    cy.url().should('include', '/login');
  });

  it('should persist username when "Remember Me" is checked', () => {
    cy.get('input[name="username"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="remember"]').check(); 
    cy.contains('button', 'Entrar').click();
    
    cy.reload();
    
    cy.get('input[name="username"]').should('have.value', 'test@example.com');
  });
});
