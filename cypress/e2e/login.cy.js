/// <reference types="cypress" />
    //testeS
import locators from '../support/locators';
import 'cypress-mochawesome-reporter/register';

describe('login', () => {
    it('Realizar Login com sucesso', () => {

        cy.visit('https://www.saucedemo.com/');

        // Preencher o campo de nome
       // cy.get(locators.Login.nome).type('standard_user');
        //cy.get(locators.Login.password).type('secret_sauce');
        // Clicar no botão de login
        //cy.get(locators.Login.loginButton).click();

        //console.log('teste: ' + typeof [locators.Login.nome]);
        //console.log('teste2: ' + typeof locators.Login.nome);

    });



    it('Realizar Login com falha', () => {

        cy.visit('https://www.saucedemo.com/');

        // Preencher o campo de email
         cy.get(locators.Login.nome).type('standard_user');
         cy.get(locators.Login.password).type('secret');
        // Clicar no botão de login
         cy.get(locators.Login.loginButton).click();

        // Verificar se a mensagem de erro é exibida
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.get('[data-test="error-button"]').click(); // Clicar no botão de erro para fechar a mensagem
    });

});
