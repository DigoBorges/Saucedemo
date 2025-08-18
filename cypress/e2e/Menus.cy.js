/// <reference types="cypress" />
    //teste
import locators from '../support/locators';
import 'cypress-mochawesome-reporter/register';   

describe('Menus burguer', () => {
    it('validar acesso aos menus', () => {

        cy.visit('https://www.saucedemo.com/');

        // Preencher o campo de nome
        cy.get(locators.Login.nome).type('standard_user');
        cy.get(locators.Login.password).type('secret_sauce');
        
        // Clicar no botão de login
        cy.get(locators.Login.loginButton).click();

        // Verificar se a página de produtos é exibida
        cy.get('.title').should('contain', 'Products'); 

        // Clicar no botão do menu hamburguer
        cy.get('#react-burger-menu-btn').click();

        // Validar que os itens do menu são exibidos
        cy.get('.bm-item-list').within(() => {      // usado within para garantir que estamos dentro do menu
            cy.contains('All Items').should('be.visible');
            cy.contains('About').should('be.visible');
            cy.contains('Logout').should('be.visible');
            cy.contains('Reset App State').should('be.visible');
        });
    });
});

