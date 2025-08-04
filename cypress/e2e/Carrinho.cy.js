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

    

        // Adicionar um produto ao carrinho e finalizar a compra

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); - //selecionar o produto
        cy.get(locators.Carrinho.cesta).click(); // carrinho
        cy.get('.cart_item').should('have.length', 1); // verificar se o produto foi adicionado ao carrinho
        cy.get(locators.Carrinho.botaoCheckout).should('be.visible').click(); //botão checkout
        cy.get(locators.Carrinho.primeiroNome).type('John'); // preencher o primeiro nome
        cy.get(locators.Carrinho.segundoNome).type('Doe');    // preencher o sobrenome
        cy.get(locators.Carrinho.caixaPostal).type('12345'); // preencher o código postal
        cy.get(locators.Carrinho.botaoContinuarCarrinho).click(); // continuar para a próxima etapa
        cy.get(locators.Carrinho.finalizarCompra).should('be.visible').click(); // finalizar a compra
        cy.get(locators.Carrinho.msgConclusaoCompra).should('contain', 'Thank you for your order!'); // verificar se a mensagem de conclusão é exibida
        cy.get('[data-test="back-to-products"]').should('be.visible').click(); // voltar para a página de produtos

               
    });

      

});    