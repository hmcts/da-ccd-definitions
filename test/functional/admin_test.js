Feature('Admin Web')

Scenario('add all the roles @pipeline', I => {
  I.loginToAdminConsole()
  I.createRole('caseworker-da-solicitor')
  I.createRole('caseworker-da-courtadmin')
  I.createRole('caseworker-da-judge')
  I.createRole('caseworker-da-la')
  I.createRole('caseworker-da-superuser')
  I.click('Manage User Roles')
  I.see('caseworker-da-solicitor')
  I.see('caseworker-da-courtadmin')
  I.see('caseworker-da-judge')
  I.see('caseworker-da-la')
  I.see('caseworker-da-superuser')
}).retry({ retries: 3, minTimeout: 30000 }) // eslint-disable-line no-magic-numbers

Scenario('upload Domestic abuse Config file @pipeline', I => {
  I.loginToAdminConsole()
  I.uploadConfig(`../../definitions/da/xlsx/${process.env.CCD_FILE_NAME}`)
  I.see('Case Definition data successfully imported')
}).retry({ retries: 3, minTimeout: 30000 }) // eslint-disable-line no-magic-numbers
