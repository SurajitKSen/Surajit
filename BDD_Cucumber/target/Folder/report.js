$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Surajit/BDD_Cucumber/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Google Email",
  "description": "",
  "id": "google-email",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Validate google Email login Test Scenario",
  "description": "",
  "id": "google-email;validate-google-email-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is Gmail from Google",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on sign in link",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enter Email or phone",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on next",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on nextt",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is into inbox page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_open_a_browser()"
});
formatter.result({
  "duration": 20115400277,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_Gmail_from_Google()"
});
formatter.result({
  "duration": 15079376,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 3609616678,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_Email_or_phone()"
});
formatter.result({
  "duration": 392202031,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_next()"
});
formatter.result({
  "duration": 321846891,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_password()"
});
formatter.result({
  "duration": 1171608835,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_nextt()"
});
formatter.result({
  "duration": 7293611557,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_into_inbox_page()"
});
formatter.result({
  "duration": 1800817615,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027QAP35-PC\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 62.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 2480, moz:profile: C:\\Users\\QAP35\\AppData\\Loca..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 94c3f652-ffba-41f7-b2db-9de198c93fb6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:329)\r\n\tat stepDefination.LoginStepDefination.user_is_into_inbox_page(LoginStepDefination.java:93)\r\n\tat ✽.And user is into inbox page(D:/Surajit/BDD_Cucumber/src/main/java/features/login.feature:10)\r\n",
  "status": "failed"
});
});