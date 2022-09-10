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

describe ('JiJi Web Store Test', ()=>{

    before(()=> { cy.visit('https://jiji.ng')})

        it ('Confirm URL', ()=> {
        cy.url().should('include','https://jiji.ng')
        
        })

        it ('Register Functionality', ()=> {
            cy.get(':nth-child(2) > .h-flex-center > div').click()
            cy.get('.h-bold > .fw-button__content').click()
            cy.get(':nth-child(1) > .fw-field > .fw-field__content > .fw-input').type('mahfooz@wema.com', {delay:100}).should('have.value','mahfooz@wema.com')
            cy.get(':nth-child(2) > .fw-field > .fw-field__content > .fw-input').type('1234567', {delay:100})
            cy.get(':nth-child(3) > .fw-field > .fw-field__content > .fw-input').type('Mahfooz').should('have.length.below', 50)
            cy.get(':nth-child(4) > .fw-field > .fw-field__content > .fw-input').type('Abubakar').should('have.length.below', 50)
            cy.get('.b-auth-last-form-field > .fw-field > .fw-field__content > .fw-input').type('08034781294', {delay:100})
            cy.get('.fw-icon-valid')
            cy.get('.cross').click()
            })

        it ('Search a product', ()=>{
            cy.get('.multiselect__tags').type('Brogues', {delay:100})
            cy.get('.fw-search__search-button > .fw-button__content > .fw-button__slot-wrapper > .fw-search__icon').click()
            cy.get('.b-filter-attribute-range > :nth-child(1) > :nth-child(1)').click()
            cy.get(':nth-child(1) > input').type('3000', {delay:100})
            cy.get(':nth-child(3) > input').type('10000', {delay:100})
            cy.get('.h-flex > .fw-button__content > .fw-button__slot-wrapper').click()
        })

        it ('Buy a product', ()=>{
            cy.get(':nth-child(1) > .b-list-advert__wrapper > .js-handle-click-ctr > .b-list-advert__block > .b-list-advert__block__inner > .b-list-advert__block__header > .b-list-advert__block__title > .qa-advert-list-item-title > .b-advert-title-inner').click()
            cy.get(':nth-child(2) > .qa-show-contact > .b-show-contact-content > .h-flex-center > .b-button__text').click()
            cy.get('.b-make-an-offer-button > .h-flex-center > .h-mt--1').click()
            cy.get('.cross').click()
        })

        it ('Post an Ad', ()=>{
            cy.get('.qa-post-ad-like-this').click()
            cy.get('.h-bold > .fw-button__content > .fw-button__slot-wrapper').click()
            cy.get(':nth-child(1) > .fw-field > .fw-field__content > .fw-input').type('randommail@gmail.com')
            cy.get('.fw-fixed-background')
        })



});
