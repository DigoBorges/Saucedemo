const locators = {

    Login: { 
    nome: '[data-test="username"]',
    password: '[data-test="password"]',         
    loginButton: '[data-test="login-button"]',
    },

   
    
    Cadastro: {

        primeiro_Nome : '[name="name"]',
        sobrenome: '[name="lastName"]',
        email: '[name="email"]',
        senha: '[name="password"]',
        repetir_senha: '[name="confirmPassword"]',
        CPF:'[name="document1"]',
        DT_Nasc:'[name="dateOfBirth"]',
        Tel_Celular:'[name="phone1"]',
        N_WhatsApp:'[name="whatsappNumber"]',

    },
        
};    

export default locators;