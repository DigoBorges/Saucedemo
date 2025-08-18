import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin.js';

export default defineConfig({
  defaultCommandTimeout: 50000,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
