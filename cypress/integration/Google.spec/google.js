const assert = require("assert");
const { Given } = require("cypress-cucumber-preprocessor/steps");

const url = 'https://google.com'

Given("I open Google page", function (givenDay) {
  cy.visit('https://www.google.com/')
  // Write code here that turns the phrase above into concrete actions
});

Then("I see {string} in the title", function (expectedAnswer) {
  // Write code here that turns the phrase above into concrete actions
  cy.title().should('include', expectedAnswer);
});
