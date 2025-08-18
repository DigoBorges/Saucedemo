/// <reference types="cypress" />

import locators from '../support/locators';
import 'cypress-mochawesome-reporter/register';
// ***********************************************  
describe('Cadastro', () => {

    before(() => {
        cy.visit('https://ssr.hml.naturacloud.com/');
        //cy.wait(2000); // Esperar 2 segundos para garantir que a página carregou completamente
    });

    it('Realizar cadastro com sucesso', () => {
        
        //cy.get('button[aria-label="Entrar "]', { timeout: 20000 }).should('be.visible').click();   // clicar no botão de entrar
        
        cy.get('button[aria-label="Entrar "]', { timeout: 20000 }).should('have.css', 'opacity', '1').click({ force: true });// espera até o botão estar totalmente opaco
  
        cy.contains('button', 'cadastrar conta', { timeout: 15000 }).should('be.visible').click(); // clicar no botão de cadastrar conta
        cy.acceptCookies(); // Aceitar cookies foi criado como um comando customizado

        // Preencher formulário de cadastro
        cy.get(locators.Cadastro.primeiro_Nome).type('João');
        cy.get(locators.Cadastro.sobrenome).type('Lima');
        cy.get(locators.Cadastro.email).type('tt@teste.com');
        cy.get(locators.Cadastro.senha).type('123456');
        cy.get(locators.Cadastro.repetir_senha).type('123456');        
        cy.get(locators.Cadastro.CPF).type('12345678901');
        cy.get(locators.Cadastro.DT_Nasc).type('01011990');
        cy.get(locators.Cadastro.Tel_Celular).type('11987654321');
        cy.get(locators.Cadastro.N_WhatsApp).type('11987654321');

        // Esperar carregamento completo do botão e clicar
        //cy.contains('button', 'finalizar cadastro', { timeout: 10000 }).should('be.visible').and('not.be.disabled').click();

        // Validação final
        //cy.contains('Conta criada com sucesso', { timeout: 10000 }).should('be.visible');
    });
});
