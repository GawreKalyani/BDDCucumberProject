$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Jbk Offine Website Dashboard Pg Module",
  "description": "",
  "id": "jbk-offine-website-dashboard-pg-module",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4020356100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify right corner heading",
  "description": "",
  "id": "jbk-offine-website-dashboard-pg-module;verify-right-corner-heading",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@dash"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user should perform valid login",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "validate right corner heading",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardStepDef.user_should_perform_valid_login()"
});
formatter.result({
  "duration": 2493855400,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDef.validate_right_corner_heading()"
});
formatter.result({
  "duration": 115324500,
  "status": "passed"
});
formatter.after({
  "duration": 139068700,
  "status": "passed"
});
});