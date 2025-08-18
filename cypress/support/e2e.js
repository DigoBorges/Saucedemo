// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';


// Ignorar erros de scripts externos (cross origin)
Cypress.on("uncaught:exception", (err, runnable) => {
  // Se quiser, pode colocar um filtro para ignorar só "Script error"
  if (err.message.includes("Script error")) {
    return false;
  }
  // Retorna false para evitar que o Cypress falhe
  return false;
});