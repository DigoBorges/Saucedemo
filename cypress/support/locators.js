const locators = {

    Login: { 
    nome: '[data-test="username"]',
    password: '[data-test="password"]',         
    loginButton: '[data-test="login-button"]',
    },

    Msg_erro:{
        errorMessage: '[data-test="error"]',
    },
    
    Carrinho: {
        addToCartBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
        cesta: '[data-test="shopping-cart-link"]',   
        botaoCheckout: '[data-test="checkout"]',
        primeiroNome: '[data-test="firstName"]',       
        segundoNome: '[data-test="lastName"]',
        caixaPostal: '[data-test="postalCode"]',                 
        botaoContinuarCarrinho: '[data-test="continue"]',
        finalizarCompra: '[data-test="finish"]',       
        msgConclusaoCompra: '.complete-header',
        backToProducts: '[data-test="back-to-products"]' 

    },
        
};    

export default locators;