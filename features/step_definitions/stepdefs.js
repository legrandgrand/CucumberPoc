const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  // We'll leave the implementation blank for now
}

  Given('today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
    this.today = 'Sunday';
  });

  When('I ask whether it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    this.actualAnswer = isItFriday(this.today);
    });

  Then('I should be told {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(this.actualAnswer, expectedAnswer);    });

