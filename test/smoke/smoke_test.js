Feature('Smoke Test on DA Application');

Scenario('Login to DA Manage Cases', I => {
  await I.loginToDAManageCases();
  await I.seeCaseListPage();
}).retry({ retries: 3, minTimeout: 30000 }); 