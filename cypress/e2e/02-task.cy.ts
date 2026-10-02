describe('Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-testid="login-button"]').click()
  })

  it('adds a new task', () => {
    const taskTitle = 'Practice Cypress assertions'

    cy.get('[data-testid="task-input"]').type(taskTitle)
    cy.get('[data-testid="add-task-button"]').click()

    cy.get('[data-testid="task-list"]')
      .should('contain.text', taskTitle)
  })
})
