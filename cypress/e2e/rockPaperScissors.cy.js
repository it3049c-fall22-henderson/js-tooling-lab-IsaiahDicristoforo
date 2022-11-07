describe(`Tests the rock paper scissors game`, () => {
  it(`types a name, selects a choice, and confirms the history log generated results`, () => {
    cy.visit(`http://127.0.0.1:8887/`); //The ip of the local web server I was running the site on.

    let playerName = `Isaiah`

    cy.get(`#username`).type(playerName)
    cy.get(`#start-game-button`).click()
    cy.get(`#user-selection`).select(`Scissors`)
    cy.get(`#go-button`).click()

    cy.get(`#game-history`).contains(playerName)

    
  })
})