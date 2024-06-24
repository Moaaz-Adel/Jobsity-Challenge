import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
export default defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1200,
  videoCompression: false,
  viewportWidth: 1200,
  screenshotOnRunFailure: true,
  projectId: "Jobsity Challenge Project",
  retries: 0,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Jobsity Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
  },
});
