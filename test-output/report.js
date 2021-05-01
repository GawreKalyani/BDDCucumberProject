$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2529319400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify Password textbox placeholder",
  "description": "",
  "id": "jbk-offline-application;verify-password-textbox-placeholder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "check placeholder content for Password Textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.check_placeholder_content_for_Password_Textbox()"
});
formatter.result({
  "duration": 152524000,
  "status": "passed"
});
formatter.after({
  "duration": 70460600,
  "status": "passed"
});
});