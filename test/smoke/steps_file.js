const I = actor();
const config = require('../end-to-end/config');

// eslint-disable-next-line no-unused-vars
const baseUrl = config.baseUrl;

module.exports = {

  fields: {
    email: 'username',
    password: 'password',
    submit: 'input[type="submit"]'
  },

  async loginToDAManageCases() {
    await I.amOnPage(`${process.env.XUI_WEB_URL}`);
    await I.click('#cookie-accept-submit');
    await I.seeElement('#authorizeCommand > div.form-section > div.login-list > input.button');
    await I.fillField(this.fields.email, config.superUserDA.email);
    await I.fillField(this.fields.password, config.superUserDA.password);
    await I.click(this.fields.submit);
  },

  async seeCaseListPage() {
    await I.seeElement('.govuk-heading-xl');
  }

};