$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3761035100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify Email textbox placeholder",
  "description": "",
  "id": "jbk-offline-application;verify-email-textbox-placeholder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "check placeholder content for Email Textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.check_placeholder_content_for_Email_Textbox()"
});
formatter.result({
  "duration": 349740900,
  "status": "passed"
});
formatter.after({
  "duration": 94820400,
  "status": "passed"
});
});