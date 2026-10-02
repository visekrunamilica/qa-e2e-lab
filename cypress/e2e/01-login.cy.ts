describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('logs in with valid credentials', () => {

    cy.get('[data-testid="email-input"]')
      .clear()
      .type('qa@example.com')

    cy.get('[data-testid="password-input"]')
      .clear()
      .type('cypress123')
      .should('have.value', 'cypress123')

    cy.get('[data-testid="login-button"]').click()

    cy.get('[data-testid="dashboard"]').should('be.visible')
    cy.get('[data-testid="welcome-message"]')
      .should('contain.text', 'Welcome, QA Student')
  })
  it('shows an error for invalid credentials', () => {
    cy.get('[data-testid="email-input"]')
      .clear()
      .type('wrong@example.com')

    cy.get('[data-testid="password-input"]')
      .clear()
      .type('random')

    cy.get('[data-testid="login-button"]').click()

    cy.get('[data-testid="login-error"]')
    .should('be.visible')
    .and('have.text','Invalid email or password')

    cy.get('[data-testid="dashboard"]').should('not.exist')
  })
})
