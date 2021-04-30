$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("operator.feature");
formatter.feature({
  "line": 1,
  "name": "JBK application Operator Pg",
  "description": "",
  "id": "jbk-application-operator-pg",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2961935700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "validating OperatorTable data with Excel",
  "description": "",
  "id": "jbk-application-operator-pg;validating-operatortable-data-with-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@operator"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "validating OperatorTable data with Excel",
  "keyword": "Then "
});
formatter.match({
  "location": "OperatorStepDef.validating_OperatorTable_data_with_Excel()"
});
formatter.result({
  "duration": 3698347500,
  "status": "passed"
});
formatter.after({
  "duration": 78581700,
  "status": "passed"
});
});