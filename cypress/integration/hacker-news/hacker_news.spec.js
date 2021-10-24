
const HACKER_NEWS = "https://abcd-e8728.web.app/#/home"
context('Hacker News', () => {
    beforeEach(() => {

    })
  
    it('Get the title', () => {
        cy.visit(HACKER_NEWS);
        cy.title().should('include', 'Hacker News')
      })

    it('Web app running', () => {
      cy.request(HACKER_NEWS)
        .should((response) => {
          expect(response.status).to.eq(200)
        })
    
    })
  
    it('API works', () => {
        cy.visit(HACKER_NEWS);
        cy.wait(1000)
        cy.get('.feature-card').should('be.visible')
    })
    
    
  })
  