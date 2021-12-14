const defaultPassword = 'Password123';

module.exports = {
  solicitorDAUser: {
    email: 'da_caseworker_solicitor@mailinator.com',
    password: process.env.DA_USER_PASSWORD || defaultPassword
  },
  courtAdmDAUser: {
    email: 'da_caseworker_courtadm@mailinator.com',
    password: process.env.DA_USER_PASSWORD || defaultPassword
  },
  judgeDAUser: {
    email: 'da_caseworker_judge@mailinator.com',
    password: process.env.DA_USER_PASSWORD || defaultPassword
  },
  localAuthourityDAUser: {
    email: 'da_caseworker_la@mailinator.com',
    password: process.env.LA_USER_PASSWORD || defaultPassword
  },
  superUserDA: {
    email: 'da_caseworker_superuser@mailinator.com',
    password: process.env.LA_USER_PASSWORD || defaultPassword
  },
  orgManagerDAUser: {
    email: 'da_org_manager@mailinator.com',
    password: process.env.LA_USER_PASSWORD || defaultPassword
  },
  
  idamApiUrl: process.env.IDAM_API_URL || 'http://localhost:5000',
  TestOutputDir: process.env.E2E_OUTPUT_DIR || './output',

  definition: {
    jurisdiction: 'PRIVATELAW',
    jurisdictionFullDesc: 'TBC',
    caseType: 'TBC',
    caseTypeFullDesc: '401 Application',
  },

  baseUrl: process.env.URL || 'https://manage-case.aat.platform.hmcts.net/cases'
};
