/// <reference types="cypress" />
    
import locators from '../support/locators';

describe('login', () => {
    it('Realizar Login com sucesso', () => {

        cy.visit('https://www.saucedemo.com/');

        // Preencher o campo de nome
        cy.get(locators.Login.nome).type('standard_user');
        cy.get(locators.Login.password).type('secret_sauce');
        // Clicar no botão de login
        cy.get(locators.Login.loginButton).click();

        console.log('teste: ' + typeof [locators.Login.nome]);
        console.log('teste2: ' + typeof locators.Login.nome);

    });



    /*it('Realizar Login com falha', () => {

        cy.visit('https://www.saucedemo.com/');

        // Preencher o campo de email
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('senha_errada');
        // Clicar no botão de login
        cy.get('[data-test="login-button"]').click();

        // Verificar se a mensagem de erro é exibida
        cy.get('[data-test="error"]').should('be.visible');
    });*/

});
