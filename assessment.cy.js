/// <reference types="cypress" />



//const { result } = require("cypress/types/lodash");


describe ('Bringyourownlaptop Web Test', () => {
    //visit BYOL home page

    before(()=> { cy.visit('https://bringyourownlaptop.com')})

    // Check URL correctness
    it ('Confirm URL', ()=> {
        cy.url().should('include','https://bringyourownlaptop.com')
    })

     it ('Check Sign up functionality', ()=> {
            cy.get('.w-full > .flex > .btn').click()
            cy.get('body').should('contain.text', 'member')
            //Back to home page
            cy.get('.mb-4 > a > .w-64').click()
            })

        it ('View Courses', ()=>{
                cy.get('.mt-8 > .btn').click()
                cy.get('.panel').within(()=>{
                    cy.get('p').reload()
                })
        })

        it ('Check contact us page', ()=>{
            cy.get(':nth-child(1) > .list-reset > :nth-child(1) > .text-white').click()
            cy.get('#name').type('Mahfooz')
            cy.get('#email').type('randommail@gmail.com', {delay:100}).should('have.value', 'randommail@gmail.com')
            cy.get('#message').type('This is my message to you, great job!').should('have.lengthOf.below', 100)
            cy.get('.justify-end > .mr-8').click()
        })

    //   // Check search functionality (Cypress Can't find searchbar)
    //   it ('Check Search functionality', ()=> {
    //     cy.get('.xl\ > .items-center').invoke('show').should('be.visible').type('Adobe Xd')
    //      })

        it ('Check border social media links', ()=>{
            cy.get('.border-t-4 > .container > .flex-col').should('have.attr','class')
            cy.get('[href="https://twitter.com/danlovesadobe"] > .fill-current > path').should('not.have.text','#')
        })


});