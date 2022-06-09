
describe('mpliflowtest.js',() => {
    it('visit Email and  Password', () => {
        cy.visit('https://test-2.ampliflow.com/login')
        cy.get('input[type="email"]').type("Cypress_Admin@dev.com")
        cy.get('input[type="password"]').type("origin-baseman-flutist")
        cy.get('.btn').click()
    })
    it('Click Improvement', () => {
        cy.get(':nth-child(2) > :nth-child(3) > .menu-node--header > .menu-node--label').click()
    })
    it('New Improvement', () => {
        cy.get('.page--title > .btn').click()
        cy.get('div.app-select-dropdown__single-value.css-qc6sy-singleValue').click({force: true})
        cy.get('div.app-select-dropdown__menu-list div.app-select-dropdown__option')
            .contains('ImprovementForm_v1_this_is_for_Cypress').click({force: true})
    })
    
    it('Severity', () => {
        cy.get('#react-select-5-placeholder').click({force: true})
        cy.get('div.app-select-dropdown__menu-list div.app-select-dropdown__option')
            .contains('1 - Less Serious').click({force: true})
    })
    it('Description ',() =>{
        cy.get('div.text-field--box').eq(0).click({force: true})
        .type('Description for testing')
        cy.get('div.text-field--box').eq(1).click({force: true}) 
        .type('Yes')
        cy.get('#b5e0c454-7bad-4db8-831e-13e69849bc4a').click({force: true})
        .type('Text.jpg')
        cy.get('span.checkmark').eq('0').click({force: true})   
        cy.get('span.checkmark').eq('1').click({force: true})   
        cy.get('span.checkmark').eq('2').click({force: true})  
        
        
        // cy.get('div.photo-field__input').click({force: true})
        // cy.get('div.btn-group :nth-child(2)').click({force: true})

        // .attachFile("test.jpg").click({force: true})
        // cy.get('input[type="file"]').click({force: true})
        // cy.get('input[type=file]').selectFile('cypress/fixtures/test.jpg',{timeout: 10000}).click()


        // cy.intercept('POST','https://dc.services.visualstudio.com/v2/track').as('get')
        // cy.wait('@get').its('response.statusCode').should('eq',200)
        // cy.get('.btn-group input.d-none').attachFile('test.jpg')
        

        cy.get('div.app-select-dropdown__indicator.app-select-dropdown__dropdown-indicator').eq(2).click({force: true})
        cy.get('#react-select-8-option-0').click({force: true})
        
        cy.get('div.app-select-dropdown__indicator.app-select-dropdown__dropdown-indicator').eq(3).click({force: true})
        cy.get('div.app-select-dropdown__option.app-select-dropdown__option--is-focused').click({force: true})

        cy.get('div.app-select-dropdown__input-container').eq(4).click({force: true})
        cy.get('div.app-select-dropdown__option').eq('6').click({force: true})

        cy.get('div.app-select-dropdown__input-container').eq(5).click({force: true})
        cy.get('div.app-select-dropdown__option').eq('2').click({force: true})

         cy.get('#0af0d567-15a4-4be2-9909-3210b4393ca7').click({force: true})
          .type('978020137962')
         cy.get('.btn__success > .btn-content').click({force: true})
         
        })

})