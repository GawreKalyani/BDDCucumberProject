$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("operator.feature");
formatter.feature({
  "line": 1,
  "name": "JBK application Operator Pg",
  "description": "",
  "id": "jbk-application-operator-pg",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5778243400,
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
  "duration": 1211563200,
  "error_message": "java.lang.AssertionError: expected:\u003c[1, Kiran, Urgent Technical Help, Whats App Only, 9552343698, 07:00 AM to 10:00 PM Monday-Sunday]\u003e but was:\u003c[01, Kiran, Urgent Technical Help, Whats App Only, 9552343698, 07:00 AM to 10:00 PM Monday-Sunday]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepDefs.OperatorStepDef.validating_OperatorTable_data_with_Excel(OperatorStepDef.java:117)\r\n\tat ✽.Then validating OperatorTable data with Excel(operator.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 99539400,
  "status": "passed"
});
});